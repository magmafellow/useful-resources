// async&await ES2017 (ES8)

// async function greet() { return 'Hello' }

// greet();

// ---

async function greet() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  });

  let result = await promise; // wait until the promise resolves

  console.log(result);
}

greet();
