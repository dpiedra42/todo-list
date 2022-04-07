import Image from 'next/image';
import dynamic from "next/dynamic";
const TodoApp = dynamic(() => import("../components/TodoApp"), { ssr: false });

export default function Home() {
  return (
    <div>
       <TodoApp/>
    </div>
  )
}
