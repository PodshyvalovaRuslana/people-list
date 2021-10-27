import Link from "next/link";
import styles from "../../styles/People.module.css";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const people = await response.json();

  return {
    props: { people },
  };
};

const People = ({ people }) => (
  <ol className={styles.list}>
    {people.map((person) => (
      <li key={person.id} className={styles.item}>
        <Link href={`/people/${person.id} `}>
          <a>{person.name}</a>
        </Link>
      </li>
    ))}
  </ol>
);

export default People;
