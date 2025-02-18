import { useQuery } from "@tanstack/react-query";

import BooksTable from "../components/books/booksTable";
import { data, Outlet } from "react-router-dom";

const Books = () => {

const { isPending , error , data } = useQuery({
  queryKey: ['booksData'],
  queryFn: async () => {
    const response = await fetch('http://localhost:3000/books')
    return response.json()
  },
  staleTime: Infinity
})

if(isPending) return <div> Loading...</div>

if(error) return <div> {`An error had occured: + ${error.message}`}</div>



return (
  <div> 
    <Outlet/>
    <h1 className="text-2xl  font-bold"> Books </h1>
    {
      isPending ? <div> Loading...</div> : <BooksTable books={data}/>
    }

  </div>
);

}

export default Books;


