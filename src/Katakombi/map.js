import { BgImg } from './levels/BgImg.js';
const Wall = () => {
  return BgImg();
};

const EmptyWall = () => {
  const img = document.createElement('img');
  img.src = '/src/Katakombi/img/catacombs-hall.jpeg';
  img.className = 'bg-img';
  return img;
};

export const TopLeftCorner = () => ({
  left: Wall(),
  front: Wall(),
  right: EmptyWall(), 
  back: EmptyWall(),
});

export const TopEnd = () => ({
  left: EmptyWall(),
  front: Wall(),
  right: EmptyWall(), 
  back: EmptyWall(),
});

export const TopRightCorner = () => ({
  left: EmptyWall(),
  front: Wall(),
  right: Wall(), 
  back: EmptyWall(),
});

export const LeftEnd = () => ({
  left: Wall(),
  front: EmptyWall(),
  right: EmptyWall(), 
  back: EmptyWall(),
});

export const Empty = () => ({
  left: EmptyWall(),
  front: EmptyWall(),
  right: EmptyWall(), 
  back: EmptyWall(),
});

export const RightEnd = () => ({
  left: EmptyWall(),
  front: EmptyWall(),
  right: Wall(), 
  back: EmptyWall(),
});

export const BottomLeftCorner = () => ({
  left: Wall(),
  front: EmptyWall(),
  right: EmptyWall(), 
  back: Wall(),
});

export const BottomEnd = () => ({
  left: EmptyWall(),
  front: EmptyWall(),
  right: EmptyWall(), 
  back: Wall(),
});

export const BottomRightCorner = () => ({
  left: EmptyWall(),
  front: EmptyWall(),
  right: Wall(), 
  back: Wall(),
});
