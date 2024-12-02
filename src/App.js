import { MissionUtils, Console } from '@woowacourse/mission-utils';
class App {
   async run() {
      async function carsInput() {
         const carsName = await Console.readLineAsync(
            '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
         );

         if (!carsName) {
            throw new Error('[ERROR] 입력이 잘못되었습니다');
         }

         const carsNameReplace = carsName.replace(/ /g, '');
         const carsNameSplit = carsNameReplace.split(',');

         for (let i = 0; i < carsNameSplit.length; i++) {
            if (carsNameSplit[i].length < 1) {
               throw new Error('[ERROR] 자동차 이름이 누락되었습니다');
            }
            if (carsNameSplit[i].length > 5) {
               throw new Error('[ERROR] 이름은 5자 이하로 입력해주세요');
            }
         }

         const set = new Set(carsNameSplit);
         if (carsNameSplit.length !== set.size) {
            throw new Error('[ERROR] 중복된 이름이 존재합니다');
         }

         return carsNameSplit;
      }

      async function numberOfAttempsInput() {
         const numberOfAttemps = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
         if (!numberOfAttemps) {
            throw new Error('[ERROR] 잘못된 형식입니다');
         }
         if (Number(numberOfAttemps) === NaN || Number(numberOfAttemps) < 1) {
            throw new Error('[ERROR] 잘못된 형식입니다');
         }
         return numberOfAttemps;
      }

      // function startGame(carsNameSplit, numberOfAttemps) {
      //    let numberOfAdvances = 0;

      //    carsNameSplit.map((carName) =>

      //    )

      //    for (let i = 0; i < numberOfAttemps; i++) {
      //       for (let j = 0; j < carsNameSplit.length; j++) {
      //          const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      //          if (randomNumber >= 4) {
      //             numberOfAdvances += 1;
      //          }
      //          console.log(
      //             '시도횟수',
      //             i + 1,
      //             '자동자',
      //             carsNameSplit[j],
      //             'randomNumber:',
      //             randomNumber,
      //             '전진횟수',
      //             numberOfAdvances
      //          );
      //       }
      //       // console.log('시도횟수', numberOfAttemps[i], '자동자', carsNameSplit[j], '전진횟수', numberOfAdvances);
      //    }
      // }

      const carsNameSplit = await carsInput();

      console.log(carsNameSplit);

      const numberOfAttemps = await numberOfAttempsInput();
      // startGame(carsNameSplit, numberOfAttemps);
   }
}

export default App;
