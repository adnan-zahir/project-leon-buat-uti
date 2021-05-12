import alertBox from '../utils/alertBox';

const Question2 = () => {
  const handleCheck = (e) => {
    // console.table(checked);
    if (e.target.id === 'jujur-2' && e.target.checked) alertBox('Aww Makacih');
    if (e.target.id === 'jujur-1' && e.target.checked) alertBox('Masasih');
  };

  return (
    <div className="question-2">
      <span>JUJUR</span>
      <label htmlFor="jujur-check">
        <input
          type="checkbox"
          name="jujur-check"
          id="jujur-1"
          onChange={handleCheck}
        />
        <span>Kangen</span>
      </label>
      <label htmlFor="jujur-check">
        <input
          type="checkbox"
          name="jujur-check"
          id="jujur-2"
          onChange={handleCheck}
        />
        <span>Kangen Banget</span>
      </label>
      <button onClick={() => (window.location = '/3')}>Lanjut</button>
    </div>
  );
};

export default Question2;
