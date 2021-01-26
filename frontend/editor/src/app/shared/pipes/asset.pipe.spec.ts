import { AssetPipe } from './asset.pipe';
import { environment } from 'src/environments/environment';

describe('AssetPipe', () => {
  it('create an instance', () => {
    const pipe = new AssetPipe();
    expect(pipe).toBeTruthy();
  });

  it('should prepend path', () => {
    const pipe = new AssetPipe();
    expect(pipe.transform('/icons/icon.png')).toBe(environment.assets + '/icons/icon.png');
    expect(pipe.transform('icons/icon.png')).toBe(environment.assets + '/icons/icon.png');
  });

});
