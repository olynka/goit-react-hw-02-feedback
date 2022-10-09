
export default function ContactList({items}) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <li key={id}>
        Name :{name} Phone :{number}
        <button>Delete</button>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}