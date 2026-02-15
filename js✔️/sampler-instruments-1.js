// ===== РЕАЛЬНЫЕ ИНСТРУМЕНТАЛЬНЫЕ СЭМПЛЫ =====
// Используем бесплатные сэмплы из Tonejs-Instruments

const SAMPLER_INSTRUMENTS = {
    // Фортепиано - высококачественные сэмплы
    'acoustic-grand-piano': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/salamander/',
        samples: {
            'A0': 'A0.mp3',
            'C1': 'C1.mp3',
            'D#1': 'Ds1.mp3',
            'F#1': 'Fs1.mp3',
            'A1': 'A1.mp3',
            'C2': 'C2.mp3',
            'D#2': 'Ds2.mp3',
            'F#2': 'Fs2.mp3',
            'A2': 'A2.mp3',
            'C3': 'C3.mp3',
            'D#3': 'Ds3.mp3',
            'F#3': 'Fs3.mp3',
            'A3': 'A3.mp3',
            'C4': 'C4.mp3',
            'D#4': 'Ds4.mp3',
            'F#4': 'Fs4.mp3',
            'A4': 'A4.mp3',
            'C5': 'C5.mp3',
            'D#5': 'Ds5.mp3',
            'F#5': 'Fs5.mp3',
            'A5': 'A5.mp3',
            'C6': 'C6.mp3',
            'D#6': 'Ds6.mp3',
            'F#6': 'Fs6.mp3',
            'A6': 'A6.mp3',
            'C7': 'C7.mp3',
            'D#7': 'Ds7.mp3',
            'F#7': 'Fs7.mp3',
            'A7': 'A7.mp3',
            'C8': 'C8.mp3'
        }
    },

    'bright-acoustic-piano': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/salamander/',
        samples: {
            'A0': 'A0.mp3', 'C1': 'C1.mp3', 'D#1': 'Ds1.mp3', 'F#1': 'Fs1.mp3',
            'A1': 'A1.mp3', 'C2': 'C2.mp3', 'D#2': 'Ds2.mp3', 'F#2': 'Fs2.mp3',
            'A2': 'A2.mp3', 'C3': 'C3.mp3', 'D#3': 'Ds3.mp3', 'F#3': 'Fs3.mp3',
            'A3': 'A3.mp3', 'C4': 'C4.mp3', 'D#4': 'Ds4.mp3', 'F#4': 'Fs4.mp3',
            'A4': 'A4.mp3', 'C5': 'C5.mp3', 'D#5': 'Ds5.mp3', 'F#5': 'Fs5.mp3',
            'A5': 'A5.mp3', 'C6': 'C6.mp3', 'D#6': 'Ds6.mp3', 'F#6': 'Fs6.mp3',
            'A6': 'A6.mp3', 'C7': 'C7.mp3'
        }
    },

    // Гитары
    'nylon-string-guitar': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3',
            'A3': 'A3.mp3',
            'A4': 'A4.mp3',
            'A5': 'A5.mp3',
            'C3': 'C3.mp3',
            'C4': 'C4.mp3',
            'C5': 'C5.mp3',
            'C6': 'C6.mp3',
            'D#3': 'Ds3.mp3',
            'D#4': 'Ds4.mp3',
            'D#5': 'Ds5.mp3',
            'F#2': 'Fs2.mp3',
            'F#3': 'Fs3.mp3',
            'F#4': 'Fs4.mp3',
            'F#5': 'Fs5.mp3'
        }
    },

    'steel-string-guitar': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/guitar-acoustic/',
        samples: {
            'A2': 'A2.mp3',
            'A3': 'A3.mp3',
            'A4': 'A4.mp3',
            'C3': 'C3.mp3',
            'C4': 'C4.mp3',
            'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3',
            'D#4': 'Ds4.mp3',
            'F#2': 'Fs2.mp3',
            'F#3': 'Fs3.mp3',
            'F#4': 'Fs4.mp3'
        }
    },

    'clean-guitar': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/guitar-electric/',
        samples: {
            'A2': 'A2.mp3',
            'C3': 'C3.mp3',
            'C4': 'C4.mp3',
            'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3',
            'D#4': 'Ds4.mp3',
            'F#2': 'Fs2.mp3',
            'F#3': 'Fs3.mp3',
            'F#4': 'Fs4.mp3'
        }
    },

    // Бас
    'fingered-bass': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/bass-electric/',
        samples: {
            'A#1': 'As1.mp3',
            'A#2': 'As2.mp3',
            'A#3': 'As3.mp3',
            'C#1': 'Cs1.mp3',
            'C#2': 'Cs2.mp3',
            'C#3': 'Cs3.mp3',
            'E1': 'E1.mp3',
            'E2': 'E2.mp3',
            'E3': 'E3.mp3',
            'G1': 'G1.mp3',
            'G2': 'G2.mp3',
            'G3': 'G3.mp3'
        }
    },

    // Струнные
    'violin': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/violin/',
        samples: {
            'A3': 'A3.mp3',
            'A4': 'A4.mp3',
            'A5': 'A5.mp3',
            'A6': 'A6.mp3',
            'C4': 'C4.mp3',
            'C5': 'C5.mp3',
            'C6': 'C6.mp3',
            'C7': 'C7.mp3',
            'E4': 'E4.mp3',
            'E5': 'E5.mp3',
            'E6': 'E6.mp3',
            'G4': 'G4.mp3',
            'G5': 'G5.mp3',
            'G6': 'G6.mp3'
        }
    },

    'cello': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/cello/',
        samples: {
            'A#2': 'As2.mp3',
            'A#3': 'As3.mp3',
            'A#4': 'As4.mp3',
            'C2': 'C2.mp3',
            'C3': 'C3.mp3',
            'C4': 'C4.mp3',
            'D#2': 'Ds2.mp3',
            'D#3': 'Ds3.mp3',
            'D#4': 'Ds4.mp3',
            'F#2': 'Fs2.mp3',
            'F#3': 'Fs3.mp3',
            'F#4': 'Fs4.mp3'
        }
    },

    // Духовые
    'flute': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/flute/',
        samples: {
            'A5': 'A5.mp3',
            'A6': 'A6.mp3',
            'C4': 'C4.mp3',
            'C5': 'C5.mp3',
            'C6': 'C6.mp3',
            'E4': 'E4.mp3',
            'E5': 'E5.mp3',
            'E6': 'E6.mp3'
        }
    },

    'trumpet': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/trumpet/',
        samples: {
            'A3': 'A3.mp3',
            'A4': 'A4.mp3',
            'A5': 'A5.mp3',
            'C3': 'C3.mp3',
            'C4': 'C4.mp3',
            'C5': 'C5.mp3',
            'D4': 'D4.mp3',
            'D5': 'D5.mp3',
            'F3': 'F3.mp3',
            'F4': 'F4.mp3',
            'F5': 'F5.mp3'
        }
    },

    'saxophone': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/saxophone/',
        samples: {
            'A3': 'A3.mp3',
            'A4': 'A4.mp3',
            'A5': 'A5.mp3',
            'C3': 'C3.mp3',
            'C4': 'C4.mp3',
            'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3',
            'D#4': 'Ds4.mp3',
            'D#5': 'Ds5.mp3',
            'F3': 'F3.mp3',
            'F4': 'F4.mp3',
            'F5': 'F5.mp3'
        }
    },

    'alto-sax': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/saxophone/',
        samples: {
            'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F3': 'F3.mp3', 'F4': 'F4.mp3', 'F5': 'F5.mp3'
        }
    },

    'tenor-sax': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/saxophone/',
        samples: {
            'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F3': 'F3.mp3', 'F4': 'F4.mp3'
        }
    },

    // Клавишные
    'vibraphone': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3', 'F#5': 'Fs5.mp3'
        }
    },

    'xylophone': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/xylophone/',
        samples: {
            'C5': 'C5.mp3',
            'C6': 'C6.mp3',
            'C7': 'C7.mp3',
            'G5': 'G5.mp3',
            'G6': 'G6.mp3',
            'G7': 'G7.mp3'
        }
    },

    // Перкуссия
    'timpani': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/drum-samples/acoustic-kit/',
        samples: {
            'C2': 'tom1.mp3',
            'D2': 'tom2.mp3',
            'E2': 'tom3.mp3',
            'F2': 'tom4.mp3'
        }
    },

    // Орган
    'church-organ': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3', 'F#5': 'Fs5.mp3'
        }
    },

    // Orchestral Harp
    'orchestral-harp': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/harp/',
        samples: {
            'A4': 'A4.mp3',
            'A5': 'A5.mp3',
            'A6': 'A6.mp3',
            'C4': 'C4.mp3',
            'C5': 'C5.mp3',
            'C6': 'C6.mp3',
            'E4': 'E4.mp3',
            'E5': 'E5.mp3'
        }
    }
};