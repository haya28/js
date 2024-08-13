// 変数宣言と動的型付け
let userName = "Alice";

// オブジェクト指向
class Greeter {
    constructor(name) {
        this.name = name;
    }

    // 関数定義と条件分岐
    getGreeting() {
        const currentHour = new Date().getHours();
        let greeting;

        if (currentHour < 12) {
            greeting = "ohayou";
        } else if (currentHour < 18) {
            greeting = "kontiwa";
        } else {
            greeting = "konbanwa";
        }

        return `${greeting}, ${this.name}!`;
    }
}

// 非同期処理
async function greetUser() {
    const greeter = new Greeter(userName);

    // Promiseを使って非同期処理を実行
    const greetingMessage = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(greeter.getGreeting());
        }, 2000); // 2秒後に挨拶を表示
    });

    console.log(greetingMessage);
}

// プログラムの実行
greetUser();
