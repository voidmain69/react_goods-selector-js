import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [activeGood, setGood] = useState('Jam');

  return (
    <main className="section container">
      {activeGood === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {activeGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            onClick={() => setGood('')}
            className="delete ml-3"
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isActiveBtn = activeGood === good;

            return (
              <tr
                data-cy="Good"
                className={
                  good === activeGood ? 'has-background-success-light' : ''
                }
                key={good}
              >
                <td>
                  <button
                    data-cy={isActiveBtn ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={`button${isActiveBtn ? ' is-info' : ''}`}
                    onClick={() => {
                      setGood(isActiveBtn ? '' : good);
                    }}
                  >
                    {isActiveBtn ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
