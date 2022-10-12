# React Sprite Animation

To create animation from the image sprite.

- [Sprite example](https://react-fgjjuw.stackblitz.io)
- [Sprite Code example](https://stackblitz.com/edit/react-fgjjuw?file=src%2FApp.js)

### Install

```shell
npm i react-sprite-animation -S
# or
yarn add react-sprite-animation
```

**React** is used with this library but do not come bundled with this library. Please make sure you have those installed before using.

### Usage

Include library, and call sprite and pass spriteImg source and frames (the number of in sprite)

#### The component

```javascript
import { Sprite } from 'react-sprite-animation';
...
      <Sprite
        spriteImg={
          'https://miro.medium.com/max/1400/1*GJ6ZL0eX8tJE54ZYFSnI9Q.png'
        }
        frames={8}
      />
```


### Props

This are the props of the component.

- spriteImg **{string}** - path to sprite
- frames **{number}** - manually sets current frame

