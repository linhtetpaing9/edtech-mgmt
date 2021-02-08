import React, { useState, useEffect } from 'react';

const WithObservableStream = (observable, triggers, initialState?) => Component => (
  props => {
    const [ localState, setLocalState ] = useState({...initialState});
    
    useEffect(() => {
      var subscription = observable.subscribe(newState => {
        setLocalState({ ...newState });
      });
      return () => {
        subscription.unsubscribe();
      }
    }, []);

    return (
      <Component {...props} {...localState} {...triggers} />
    );
  }
);


// const query$ = new BehaviorSubject('');
// const loading$ = new BehaviorSubject(true);
// const detail$ = new BehaviorSubject({});

// const fetch$ = combineLatest(query$).pipe(
//   debounce(() => timer(500)),
//   flatMap(async ([query]) => {
//     const result: any = await fetch(`http://nano-finance.test/api/v1/clients?name=${query}`)
//     const data = await result.json();
//     return data;
//   }),
//   map(result => result),
// );

// export default WithObservableStream(
//   combineLatest(query$, fetch$, loading$, detail$, (query, lists, loading, detail) => ({ query, lists, loading, detail })),
//   {
//     onChangeQuery: value => query$.next(value),
//     onLoading: value => loading$.next(value),
//     onDetailClick: value => detail$.next(value)
//   },
//   {
//     query: '3',
//     lists: [],
//     loading: true,
//     detail: {}
//   }
// )(Clients);

export default WithObservableStream;