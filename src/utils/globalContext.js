//passing data from one component to another component via props is very big challenge when the app is huge.if the parent component contain a data we want to use this to the nested children,we normally use props for sending data.its not a good way to pass data via props. This is known as Props Drilling

import { createContext } from "react";
export const UserContext = createContext({
  loggedUser: "Search",
});

//  A data is present somewhere and we want to access  it somewhere else then how to do that? for that react giving us a superpower known as Reacact Context . while we use context we can just avois props drilling
