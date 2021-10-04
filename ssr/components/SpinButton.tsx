import { useState } from 'react';
import styles from '../styles/SpinButton.module.css';

interface Props {
  target: string;
}

const SpinButton = ({ target }: Props) => {
  const [passengerCount, setPassengerCount] = useState(1);

  const handleIncreasePassengerCount = () => {
    if (passengerCount >= 3) {
      alert('한번에 최대 3인만 탑승 가능합니다');
      return;
    }

    setPassengerCount(passengerCount + 1);
  };

  const handleDecreasePassengerCount = () => {
    if (passengerCount <= 0) {
      return;
    }

    setPassengerCount(passengerCount - 1);
  };

  const handleChangePassengerCount: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      const { valueAsNumber } = event.currentTarget;

      if (valueAsNumber < 0) {
        return;
      }

      setPassengerCount(valueAsNumber);
    };

  return (
    <section className="spin-button-wrapper">
      <h3 className="">{target}</h3>
      <button
        type="button"
        aria-label={`${target} 탑승자 한명 줄이기`}
        className={styles['spin-button']}
        onClick={handleDecreasePassengerCount}
      >
        -
      </button>
      <input
        type="number"
        aria-labelledby="passenger-count"
        className={styles['passenger-count-input']}
        onChange={handleChangePassengerCount}
        value={passengerCount}
      />
      <button
        type="button"
        aria-label={`${target} 탑승자 한명 늘리기`}
        className={styles['spin-button']}
        onClick={handleIncreasePassengerCount}
      >
        +
      </button>
      <span
        id="passenger-count"
        className="visually-hidden"
        aria-live="assertive"
        aria-atomic="true"
        aria-label={`${target} 인원 수`}
      >
        {passengerCount}명
      </span>
    </section>
  );
};

export default SpinButton;
