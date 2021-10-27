import styles from "../../styles/Person.module.css";
const dataPath = "https://jsonplaceholder.typicode.com/users";

export const getStaticPaths = async () => {
  const response = await fetch(dataPath);
  const people = await response.json();

  const paths = people.map((person) => {
    return {
      params: { id: person.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(`${dataPath}/${id}`);
  const person = await response.json();

  return {
    props: { person },
  };
};

const Person = ({ person: { name, email, company } }) => (
  <div className={styles.person}>
    <p>
      <span className={styles.person__name}>Name: </span>
      {name}
    </p>
    <p>
      <span className={styles.person__email}>Email: </span>
      {email}
    </p>
    <p>
      <span className={styles.person__company}>Company: </span>
      {company.name}
    </p>
  </div>
);

export default Person;
