import alertBox from '../utils/alertBox';

const Question1 = () => {
  const handleRadio = (e) => {
    switch (e.target.id) {
      case 'radio-1':
        alertBox('Yang bener ah');
        break;
      case 'radio-2':
        window.location = '/2';
        break;
      case 'radio-3':
        alertBox('Yang bener ah');
        break;
      default:
        return;
    }
  };

  return (
    <div className="question-1">
      <span>BM uti</span>
      <label htmlFor="bm-uti">
        <input type="radio" name="bm-uti" id="radio-1" onClick={handleRadio} />
        <span>Daging Babi</span>
      </label>
      <label htmlFor="bm-uti">
        <input type="radio" name="bm-uti" id="radio-2" onClick={handleRadio} />
        <span>Takoyaki</span>
      </label>
      <label htmlFor="bm-uti">
        <input type="radio" name="bm-uti" id="radio-3" onClick={handleRadio} />
        <span>Steak</span>
      </label>
    </div>
  );
};

export default Question1;
