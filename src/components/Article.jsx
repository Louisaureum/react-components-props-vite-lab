function Article({ title, date = "January 1, 1970", preview, minutes = 0 }) {
  let emoji = "";

  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    emoji = "☕️".repeat(cups);
  } else {
    const bentos = Math.ceil(minutes / 10);
    emoji = "🍱".repeat(bentos);
  }

  const readingTime = `${emoji ? `${emoji} ` : ""}${minutes} min read`;

  return (
    <article>
      <h3>{title}</h3>
      <small>{readingTime} • {date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
