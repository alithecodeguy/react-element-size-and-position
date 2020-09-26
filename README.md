# react-element-size-and-position

> get elements and components size and position with react custome hook

[![NPM](https://img.shields.io/npm/v/react-element-size-and-position.svg)](https://www.npmjs.com/package/react-element-size-and-position) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-element-size-and-position
```

## Usage

```jsx
import { useElementProperties } from 'react-element-size-and-position'
import 'react-element-size-and-position/dist/index.css'

const App = () => {
  let elementProperties = useElementProperties('alithecodeguy')
  console.log(elementProperties)
  return (
    <div
      style={{
        height: '50vh',
        width: '80%',
        padding: '2vw',
        margin: 14
      }}
    >
      <div
        id='alithecodeguy'
        style={{
          height: '20vh',
          width: '83%',
          padding: 50,
          margin: 17,
          backgroundColor: 'blue'
        }}
      ></div>
    </div>
  )
}

export default App
```

## License

MIT © [alithecodeguy](https://github.com/alithecodeguy)
