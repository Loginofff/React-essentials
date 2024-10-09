export default function TabButton({ children }) {

function handleClick() {
    console.log('click');
    
}

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}

