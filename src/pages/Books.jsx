import { useQuery } from "@tanstack/react-query";
import BooksTable from "../booksTable";

const Books = () => {

const { isPending , error , data: books } = useQuery({
  queryKey: ['booksData'],
  queryFn: async () => {
    console.log('Feteching Data');
    const response = await fetch('http://localhost:3000/books')
    return response.json()
  }
})

if(isPending) return <div> Loading...</div>

return <BooksTable books={books} />;
};

export default Books;


