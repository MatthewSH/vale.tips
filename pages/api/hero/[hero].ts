import { tips } from '../../../data/tips/tips';

const Hero = (req, res) => {
    const {
        query: { hero }, 
    } = req;

    if (!tips[hero]) {
        return res.status(404).json({ error: 'Hero not available.'})
    }
    
    let heroData = tips[hero];

    res.json(heroData);
};

export default Hero;