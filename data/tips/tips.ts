import { authors } from './base';

export const tips: { [index: string]: any } = {
    ana: {
        meta: {
            display_name: 'Ana',
            profile_image: 'https://i.imgur.com/CSqsV4c.png'
        },
        tips: [
            {
                'author': authors.vale,
                'id': '0-crosshair',
                'title': 'Crosshair Opacity',
                'short': 'Try playing with crosshair at 0% opacity, it might improve your aim. Worked for Vale!',
                'long': 'Try playing with crosshair at 0% opacity, it might improve your aim. Worked for Vale!'
            },
            {
                'author': authors.vale,
                'id': 'enemy-nade',
                'title': 'Anti-Nade',
                'short': 'Nade the foes',
                'long': 'Nade the foes like they were hoes.'
            },
            {
                'author': authors.vale,
                'id': 'sleep-dart',
                'title': 'Managing Sleep Dart',
                'short': 'Save your sleep for flankers or enemy ultimates.',
                'long': 'Save your sleep for flankers or enemy ultimates.'
            }
        ]
    }
}