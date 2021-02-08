import { Menu } from 'antd';
import React from 'react';
import TwoSplitLayout from '../components/layouts/TwoSplitLayout';
import Link from 'next/link';
import dynamic from 'next/dynamic'
import FunctionRepo from '../components/functions';
const CodeEditor = dynamic(import('../components/project-components/CodeEditor'), { ssr: false })

const Functions = ({ query }) => {
  const { name = 'chunk' } = query;

  const funcString = FunctionRepo[name].string;
  const funcKeys = Object.keys(FunctionRepo);
  return (

    <TwoSplitLayout
      left={
        <Menu onClick={() => { }} selectedKeys={['1']} mode="vertical">
          {
            funcKeys.map(funcKey => (
              <Menu.Item key={funcKey} className={funcKey == name ? 'active-selected' : ''}>
                <Link href={`/functions?name=${funcKey}`}>
                  <a>
                    {funcKey}
                  </a>
                </Link>
              </Menu.Item>
            ))
          }
        </Menu>
      }
      right={
        <>
          <CodeEditor
            key={`function-editor-tsx`}
            value={funcString}
            readOnly={true}
            mode="tsx"
          />
        </>
      }
    >

    </TwoSplitLayout>
  )
}

Functions.getInitialProps = async context => {
  const { query } = context;
  return { query }
}

export default Functions;