import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
// import { PostCardContainer } from "./styles";
import Link from 'next/link';


export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: string;
}

interface IPostCard {
  post: IPost;
}

function formatText(text: string, limitLength = 50) {
    const textArr = text.split(" ")
    const newText = textArr.map((string, index) => {
        if (index < limitLength) return string
    }).filter(string => string !== undefined
    )
    return `${newText.toString().replaceAll(",", " ")}...`
}


export default function PostCard({ post }: IPostCard) {
  const { created_at, body, title, number } = post;
  const formattedDate = formatDistanceToNow(new Date(created_at), {
    locale: enUS,
    addSuffix: true,
  });
  return (
    <Link href={{ pathname: `/blogs/${post.number}` }} >
      <header>
        <h1>{title}</h1>
        <span>{formattedDate}</span>
      </header>
      <main>
        <p>{formatText(body, 80)}</p>
      </main>
    </Link>
  );
}
