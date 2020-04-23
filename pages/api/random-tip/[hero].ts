import { tips } from '../../../data/tips/tips';

const Hero = (req, res) => {
    const {
        query: { hero, key }, 
    } = req;

    if (!tips[hero]) {
        return res.status(404).json({ message: 'Hero tip not available.'})
    }
    let heroData = tips[hero];
    let tip = heroData.tips[(Math.floor(Math.random() * heroData.tips.length))];

    res.json((key ? tip[key] : tip));
};

export default Hero;