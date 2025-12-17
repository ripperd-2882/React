function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        <strong> Question</strong> {index + 1}/{numQuestions}
      </p>
      <p>
        Points <strong>{points}</strong>/{maxPossiblePoints} points
      </p>
    </header>
  );
}

export default Progress;
