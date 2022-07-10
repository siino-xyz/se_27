import Link from "next/link";
import Category from "../../types/category";
import styles from "../styles/components/categories.module.scss";

type CategoriesProps = {
  categories: Array<Category>;
};

export const Categories = ({ categories }: CategoriesProps) => {
  return (
    <>
      <div className={styles.categoriesContainer}>
        {/* <h3>Category</h3> */}
        <div className={styles.categoriesList}>
          <div className={styles.categoryItem}>
            <Link href={"/blog"}>
              <a>
                <div className={styles.categoryName}>All</div>
              </a>
            </Link>
          </div>
          {categories.map((categories) => {
            return (
              <div className={styles.categoryItem} key={categories.id}>
                <Link href={`/category/page/${categories.id}`}>
                  <a>
                    <div className={styles.categoryName}>{categories.name}</div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
