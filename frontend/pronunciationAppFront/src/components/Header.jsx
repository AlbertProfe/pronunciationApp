

export default function Header(){


return (
  <>
    <h1>Learn English once and for all</h1>
    <section className="profile">
      <h2>Practice Real-World Conversations</h2>
      <img
        className="avatar"
        src="../src/assets/hero-image.png"
        alt="Practice Real-World Conversations"
      />
      <ul>
        <li>
          <b>Speak: </b>
          practice your pronunciation
        </li>
        <li>
          <b>Drill: </b>
          repeat until perfection!
        </li>
        <li>
          <b>Listen: </b>
          get used to real english sounds
        </li>
      </ul>
    </section>
  </>
);


}