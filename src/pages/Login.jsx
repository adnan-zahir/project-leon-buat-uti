import { useState } from 'react';
import alertBox from '../utils/alertBox';

const Login = () => {
  const [nama, setNama] = useState('');
  const [pass, setPass] = useState('');
  const [chance, setChance] = useState(1);

  const kunciNama = 'Rahmalia Putri';
  const kunciPass = 'uti baik';

  const handleLogin = () => {
    if (nama !== kunciNama || pass !== kunciPass) {
      switch (chance) {
        case 1:
          alertBox('Masa lupa sih');
          setChance(chance + 1);
          break;
        case 2:
          alertBox('Jangan pura pura lupa');
          setChance(chance + 1);
          break;
        default:
          alertBox('Isi Rahmalia Putri sama uti baik aja elaaahh');
          break;
      }
    } else {
      window.location = '/1';
    }
  };

  return (
    <div className="login">
      <label htmlFor="nama">
        <span>Masukin nama dong</span>
        <input
          type="text"
          name="nama"
          onChange={(e) => setNama(e.target.value)}
          value={nama}
        />
      </label>
      <label htmlFor="pass">
        <span>Kata kunci uti</span>
        <input
          type="password"
          name="pass"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
        />
      </label>
      <button onClick={handleLogin}>Cek</button>
    </div>
  );
};

export default Login;
