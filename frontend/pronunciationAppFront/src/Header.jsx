export default function HeaderSection(){


  return (
    <>
      <h1>Learn Memes once and for all</h1>
      <section className="profile">
        <h2>Practice Real-World Memes in your social media</h2>
        <img
          className="avatar"
          src="./public/cat-meme.jpeg"
          alt="Practice Real-World Meme Injections"
        />
        <ul>
          <li>
            <b>Speak: </b>
            practice your memes
          </li>
          <li>
            <b>Drill: </b>
            meme until perfection!
          </li>
          <li>
            <b>Listen: </b>
            get used to real meme sounds
          </li>
        </ul>
      </section>
    </>
  );
}