import Link from 'next/link'
import Category from '../types/category'

type CategoriesProps = {
  categories: Array<Category>;
}


export const Categories = ({categories}:CategoriesProps) => {
  return (
    <div>
      <h1>カテゴリー</h1>
      <ul>
        {categories.map((categories) => {
          return (
            <li key={categories.id}>
              <Link href={`/category/${categories.id}`}>
                <a>{categories.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories