// ===== ПОЛНАЯ БИБЛИОТЕКА СЭМПЛОВ ДЛЯ ВСЕХ 128 ИНСТРУМЕНТОВ GENERAL MIDI =====

const SAMPLER_INSTRUMENTS = {
    // ==================== PIANO (0-7) ====================
    'acoustic-grand-piano': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/salamander/',
        samples: {
            'A0': 'A0.mp3', 'C1': 'C1.mp3', 'D#1': 'Ds1.mp3', 'F#1': 'Fs1.mp3',
            'A1': 'A1.mp3', 'C2': 'C2.mp3', 'D#2': 'Ds2.mp3', 'F#2': 'Fs2.mp3',
            'A2': 'A2.mp3', 'C3': 'C3.mp3', 'D#3': 'Ds3.mp3', 'F#3': 'Fs3.mp3',
            'A3': 'A3.mp3', 'C4': 'C4.mp3', 'D#4': 'Ds4.mp3', 'F#4': 'Fs4.mp3',
            'A4': 'A4.mp3', 'C5': 'C5.mp3', 'D#5': 'Ds5.mp3', 'F#5': 'Fs5.mp3',
            'A5': 'A5.mp3', 'C6': 'C6.mp3', 'D#6': 'Ds6.mp3', 'F#6': 'Fs6.mp3',
            'A6': 'A6.mp3', 'C7': 'C7.mp3', 'D#7': 'Ds7.mp3', 'F#7': 'Fs7.mp3',
            'A7': 'A7.mp3', 'C8': 'C8.mp3'
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

    'electric-grand-piano': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3', 'F#5': 'Fs5.mp3'
        }
    },

    'honky-tonk-piano': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/salamander/',
        samples: {
            'A1': 'A1.mp3', 'C2': 'C2.mp3', 'D#2': 'Ds2.mp3', 'F#2': 'Fs2.mp3',
            'A2': 'A2.mp3', 'C3': 'C3.mp3', 'D#3': 'Ds3.mp3', 'F#3': 'Fs3.mp3',
            'A3': 'A3.mp3', 'C4': 'C4.mp3', 'D#4': 'Ds4.mp3', 'F#4': 'Fs4.mp3',
            'A4': 'A4.mp3', 'C5': 'C5.mp3', 'D#5': 'Ds5.mp3', 'F#5': 'Fs5.mp3',
            'A5': 'A5.mp3', 'C6': 'C6.mp3', 'D#6': 'Ds6.mp3'
        }
    },

    'electric-piano-1': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3', 'F#5': 'Fs5.mp3'
        }
    },

    'electric-piano-2': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'harpsichord': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3', 'F#5': 'Fs5.mp3'
        }
    },

    'clavinet': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    // ==================== CHROMATIC PERCUSSION (8-15) ====================
    'celesta': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3', 'F#5': 'Fs5.mp3'
        }
    },

    'glockenspiel': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'D#5': 'Ds5.mp3', 'F#5': 'Fs5.mp3',
            'A5': 'A5.mp3', 'C7': 'C7.mp3'
        }
    },

    'music-box': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#4': 'Fs4.mp3', 'F#5': 'Fs5.mp3',
            'A4': 'A4.mp3', 'A5': 'A5.mp3'
        }
    },

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

    'marimba': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3', 'F#5': 'Fs5.mp3'
        }
    },

    'xylophone': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/xylophone/',
        samples: {
            'C5': 'C5.mp3', 'C6': 'C6.mp3', 'C7': 'C7.mp3',
            'G5': 'G5.mp3', 'G6': 'G6.mp3', 'G7': 'G7.mp3'
        }
    },

    'tubular-bells': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#4': 'Fs4.mp3', 'F#5': 'Fs5.mp3',
            'A4': 'A4.mp3', 'A5': 'A5.mp3'
        }
    },

    'dulcimer': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3', 'F#5': 'Fs5.mp3'
        }
    },

    // ==================== ORGAN (16-23) ====================
    'drawbar-organ': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3', 'F#5': 'Fs5.mp3'
        }
    },

    'percussive-organ': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3', 'F#5': 'Fs5.mp3'
        }
    },

    'rock-organ': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3', 'F#5': 'Fs5.mp3'
        }
    },

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

    'reed-organ': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'accordion': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'harmonica': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/harmonium/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'tango-accordion': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    // ==================== GUITAR (24-31) ====================
    'nylon-string-guitar': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/guitar-nylon/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C#5': 'Cs5.mp3',
            'D2': 'D2.mp3', 'D3': 'D3.mp3', 'D5': 'D5.mp3',
            'D#4': 'Ds4.mp3', 'E2': 'E2.mp3', 'E3': 'E3.mp3',
            'E4': 'E4.mp3', 'E5': 'E5.mp3',
            'F3': 'F3.mp3', 'F4': 'F4.mp3', 'F#2': 'Fs2.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3', 'F#5': 'Fs5.mp3',
            'G3': 'G3.mp3', 'G5': 'G5.mp3',
            'G#2': 'Gs2.mp3', 'G#4': 'Gs4.mp3', 'G#5': 'Gs5.mp3'
        }
    },

    'steel-string-guitar': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/guitar-acoustic/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'jazz-guitar': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/guitar-electric/',
        samples: {
            'A2': 'A2.mp3', 'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'clean-guitar': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/guitar-electric/',
        samples: {
            'A2': 'A2.mp3', 'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'muted-guitar': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/guitar-electric/',
        samples: {
            'A2': 'A2.mp3', 'C3': 'C3.mp3', 'C4': 'C4.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'overdriven-guitar': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/guitar-electric/',
        samples: {
            'A2': 'A2.mp3', 'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'distortion-guitar': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/guitar-electric/',
        samples: {
            'A2': 'A2.mp3', 'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'guitar-harmonics': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/guitar-acoustic/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    // ==================== BASS (32-39) ====================
    'acoustic-bass': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/bass-electric/',
        samples: {
            'A#1': 'As1.mp3', 'A#2': 'As2.mp3', 'A#3': 'As3.mp3',
            'C#1': 'Cs1.mp3', 'C#2': 'Cs2.mp3', 'C#3': 'Cs3.mp3',
            'E1': 'E1.mp3', 'E2': 'E2.mp3', 'E3': 'E3.mp3',
            'G1': 'G1.mp3', 'G2': 'G2.mp3', 'G3': 'G3.mp3'
        }
    },

    'fingered-bass': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/bass-electric/',
        samples: {
            'A#1': 'As1.mp3', 'A#2': 'As2.mp3', 'A#3': 'As3.mp3',
            'C#1': 'Cs1.mp3', 'C#2': 'Cs2.mp3', 'C#3': 'Cs3.mp3',
            'E1': 'E1.mp3', 'E2': 'E2.mp3', 'E3': 'E3.mp3',
            'G1': 'G1.mp3', 'G2': 'G2.mp3', 'G3': 'G3.mp3'
        }
    },

    'picked-bass': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/bass-electric/',
        samples: {
            'A#1': 'As1.mp3', 'A#2': 'As2.mp3', 'A#3': 'As3.mp3',
            'C#1': 'Cs1.mp3', 'C#2': 'Cs2.mp3', 'C#3': 'Cs3.mp3',
            'E1': 'E1.mp3', 'E2': 'E2.mp3', 'E3': 'E3.mp3',
            'G1': 'G1.mp3', 'G2': 'G2.mp3', 'G3': 'G3.mp3'
        }
    },

    'fretless-bass': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/bass-electric/',
        samples: {
            'A#1': 'As1.mp3', 'A#2': 'As2.mp3', 'A#3': 'As3.mp3',
            'C#1': 'Cs1.mp3', 'C#2': 'Cs2.mp3', 'C#3': 'Cs3.mp3',
            'E1': 'E1.mp3', 'E2': 'E2.mp3', 'E3': 'E3.mp3',
            'G1': 'G1.mp3', 'G2': 'G2.mp3', 'G3': 'G3.mp3'
        }
    },

    'slap-bass-1': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/bass-electric/',
        samples: {
            'A#1': 'As1.mp3', 'A#2': 'As2.mp3', 'A#3': 'As3.mp3',
            'C#1': 'Cs1.mp3', 'C#2': 'Cs2.mp3', 'C#3': 'Cs3.mp3',
            'E1': 'E1.mp3', 'E2': 'E2.mp3', 'E3': 'E3.mp3',
            'G1': 'G1.mp3', 'G2': 'G2.mp3', 'G3': 'G3.mp3'
        }
    },

    'slap-bass-2': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/bass-electric/',
        samples: {
            'A#1': 'As1.mp3', 'A#2': 'As2.mp3', 'A#3': 'As3.mp3',
            'C#1': 'Cs1.mp3', 'C#2': 'Cs2.mp3', 'C#3': 'Cs3.mp3',
            'E1': 'E1.mp3', 'E2': 'E2.mp3', 'E3': 'E3.mp3',
            'G1': 'G1.mp3', 'G2': 'G2.mp3', 'G3': 'G3.mp3'
        }
    },

    'synth-bass-1': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/bass-electric/',
        samples: {
            'A#1': 'As1.mp3', 'A#2': 'As2.mp3',
            'C#1': 'Cs1.mp3', 'C#2': 'Cs2.mp3',
            'E1': 'E1.mp3', 'E2': 'E2.mp3',
            'G1': 'G1.mp3', 'G2': 'G2.mp3'
        }
    },

    'synth-bass-2': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/bass-electric/',
        samples: {
            'A#1': 'As1.mp3', 'A#2': 'As2.mp3',
            'C#1': 'Cs1.mp3', 'C#2': 'Cs2.mp3',
            'E1': 'E1.mp3', 'E2': 'E2.mp3',
            'G1': 'G1.mp3', 'G2': 'G2.mp3'
        }
    },

    // ==================== STRINGS (40-47) ====================
    'violin': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/violin/',
        samples: {
            'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3', 'A6': 'A6.mp3',
            'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3', 'C7': 'C7.mp3',
            'E4': 'E4.mp3', 'E5': 'E5.mp3', 'E6': 'E6.mp3',
            'G4': 'G4.mp3', 'G5': 'G5.mp3', 'G6': 'G6.mp3'
        }
    },

    'viola': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/cello/',
        samples: {
            'A#2': 'As2.mp3', 'A#3': 'As3.mp3', 'A#4': 'As4.mp3',
            'C2': 'C2.mp3', 'C3': 'C3.mp3', 'C4': 'C4.mp3',
            'D#2': 'Ds2.mp3', 'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'cello': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/cello/',
        samples: {
            'A#2': 'As2.mp3', 'A#3': 'As3.mp3', 'A#4': 'As4.mp3',
            'C2': 'C2.mp3', 'C3': 'C3.mp3', 'C4': 'C4.mp3',
            'D#2': 'Ds2.mp3', 'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'contrabass': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/contrabass/',
        samples: {
            'A#1': 'As1.mp3', 'A#2': 'As2.mp3',
            'C1': 'C1.mp3', 'C2': 'C2.mp3',
            'D#1': 'Ds1.mp3', 'D#2': 'Ds2.mp3',
            'F#1': 'Fs1.mp3', 'F#2': 'Fs2.mp3'
        }
    },

    'tremolo-strings': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/violin/',
        samples: {
            'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'E4': 'E4.mp3', 'E5': 'E5.mp3', 'E6': 'E6.mp3',
            'G4': 'G4.mp3', 'G5': 'G5.mp3', 'G6': 'G6.mp3'
        }
    },

    'pizzicato-strings': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/violin/',
        samples: {
            'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'E4': 'E4.mp3', 'E5': 'E5.mp3',
            'G4': 'G4.mp3', 'G5': 'G5.mp3'
        }
    },

    'orchestral-harp': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/harp/',
        samples: {
            'A4': 'A4.mp3', 'A5': 'A5.mp3', 'A6': 'A6.mp3',
            'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3', 'C7': 'C7.mp3',
            'E4': 'E4.mp3', 'E5': 'E5.mp3', 'E6': 'E6.mp3',
            'G4': 'G4.mp3', 'G5': 'G5.mp3'
        }
    },

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

    // ==================== ENSEMBLE (48-55) ====================
    'string-ensemble-1': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/violin/',
        samples: {
            'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'E4': 'E4.mp3', 'E5': 'E5.mp3', 'E6': 'E6.mp3',
            'G4': 'G4.mp3', 'G5': 'G5.mp3', 'G6': 'G6.mp3'
        }
    },

    'string-ensemble-2': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/violin/',
        samples: {
            'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'E4': 'E4.mp3', 'E5': 'E5.mp3',
            'G4': 'G4.mp3', 'G5': 'G5.mp3'
        }
    },

    'synth-strings-1': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'synth-strings-2': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'choir-aahs': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'voice-oohs': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'synth-choir': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'orchestra-hit': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'C4': 'C4.mp3', 'C5': 'C5.mp3'
        }
    },

    // ==================== BRASS (56-63) ====================
    'trumpet': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/trumpet/',
        samples: {
            'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D4': 'D4.mp3', 'D5': 'D5.mp3',
            'F3': 'F3.mp3', 'F4': 'F4.mp3', 'F5': 'F5.mp3'
        }
    },

    'trombone': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/trombone/',
        samples: {
            'A#1': 'As1.mp3', 'A#2': 'As2.mp3', 'A#3': 'As3.mp3',
            'C#2': 'Cs2.mp3', 'C#3': 'Cs3.mp3', 'C#4': 'Cs4.mp3',
            'D#2': 'Ds2.mp3', 'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F2': 'F2.mp3', 'F3': 'F3.mp3', 'F4': 'F4.mp3'
        }
    },

    'tuba': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/tuba/',
        samples: {
            'A#1': 'As1.mp3', 'A#2': 'As2.mp3', 'A#3': 'As3.mp3',
            'D2': 'D2.mp3', 'D3': 'D3.mp3',
            'D#1': 'Ds1.mp3', 'D#2': 'Ds2.mp3',
            'F0': 'F0.mp3', 'F1': 'F1.mp3', 'F2': 'F2.mp3', 'F3': 'F3.mp3'
        }
    },

    'muted-trumpet': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/trumpet/',
        samples: {
            'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D4': 'D4.mp3',
            'F3': 'F3.mp3', 'F4': 'F4.mp3'
        }
    },

    'french-horn': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/french-horn/',
        samples: {
            'A2': 'A2.mp3', 'A4': 'A4.mp3',
            'C2': 'C2.mp3', 'C4': 'C4.mp3',
            'D3': 'D3.mp3', 'D5': 'D5.mp3',
            'F2': 'F2.mp3', 'F4': 'F4.mp3',
            'G2': 'G2.mp3'
        }
    },

    'brass-section': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/trumpet/',
        samples: {
            'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D4': 'D4.mp3',
            'F3': 'F3.mp3', 'F4': 'F4.mp3'
        }
    },

    'synth-brass-1': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'synth-brass-2': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    // ==================== REED (64-71) ====================
    'soprano-sax': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/saxophone/',
        samples: {
            'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F3': 'F3.mp3', 'F4': 'F4.mp3', 'F5': 'F5.mp3'
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
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F3': 'F3.mp3', 'F4': 'F4.mp3'
        }
    },

    'baritone-sax': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/saxophone/',
        samples: {
            'A3': 'A3.mp3', 'C3': 'C3.mp3', 'C4': 'C4.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F3': 'F3.mp3', 'F4': 'F4.mp3'
        }
    },

    'oboe': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'english-horn': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'bassoon': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/bassoon/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C2': 'C2.mp3', 'C3': 'C3.mp3', 'C4': 'C4.mp3',
            'D#2': 'Ds2.mp3', 'D#3': 'Ds3.mp3',
            'F#2': 'Fs2.mp3', 'F#3': 'Fs3.mp3'
        }
    },

    'clarinet': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/clarinet/',
        samples: {
            'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'D3': 'D3.mp3', 'D4': 'D4.mp3', 'D5': 'D5.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3', 'F#5': 'Fs5.mp3'
        }
    },

    // ==================== PIPE (72-79) ====================
    'piccolo': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/flute/',
        samples: {
            'A5': 'A5.mp3', 'A6': 'A6.mp3',
            'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'E4': 'E4.mp3', 'E5': 'E5.mp3', 'E6': 'E6.mp3'
        }
    },

    'flute': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/flute/',
        samples: {
            'A5': 'A5.mp3', 'A6': 'A6.mp3',
            'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'E4': 'E4.mp3', 'E5': 'E5.mp3', 'E6': 'E6.mp3'
        }
    },

    'recorder': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/flute/',
        samples: {
            'A5': 'A5.mp3', 'A6': 'A6.mp3',
            'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'E4': 'E4.mp3', 'E5': 'E5.mp3'
        }
    },

    'pan-flute': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/flute/',
        samples: {
            'A5': 'A5.mp3',
            'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'E4': 'E4.mp3', 'E5': 'E5.mp3'
        }
    },

    'blown-bottle': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/flute/',
        samples: {
            'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'E4': 'E4.mp3', 'E5': 'E5.mp3'
        }
    },

    'shakuhachi': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/flute/',
        samples: {
            'A5': 'A5.mp3',
            'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'E4': 'E4.mp3', 'E5': 'E5.mp3'
        }
    },

    'whistle': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'D#5': 'Ds5.mp3',
            'F#5': 'Fs5.mp3'
        }
    },

    'ocarina': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A4': 'A4.mp3',
            'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#4': 'Ds4.mp3',
            'F#4': 'Fs4.mp3'
        }
    },

    // ==================== SYNTH LEAD (80-87) ====================
    // Для синтезаторов используем синтез вместо сэмплов
    // Они определены в INSTRUMENT_MAP

    // ==================== SYNTH PAD (88-95) ====================
    // Для синтезаторных падов используем синтез

    // ==================== SYNTH EFFECTS (96-103) ====================
    // Для эффектов используем синтез

    // ==================== ETHNIC (104-111) ====================
    'sitar': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'banjo': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'shamisen': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'koto': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'kalimba': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'D#4': 'Ds4.mp3', 'D#5': 'Ds5.mp3',
            'F#4': 'Fs4.mp3', 'F#5': 'Fs5.mp3'
        }
    },

    'bagpipe': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#4': 'Ds4.mp3',
            'F#4': 'Fs4.mp3'
        }
    },

    'fiddle': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/violin/',
        samples: {
            'A3': 'A3.mp3', 'A4': 'A4.mp3', 'A5': 'A5.mp3',
            'C4': 'C4.mp3', 'C5': 'C5.mp3', 'C6': 'C6.mp3',
            'E4': 'E4.mp3', 'E5': 'E5.mp3',
            'G4': 'G4.mp3', 'G5': 'G5.mp3'
        }
    },

    'shanai': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#4': 'Ds4.mp3',
            'F#4': 'Fs4.mp3'
        }
    },

    // ==================== PERCUSSIVE (112-119) ====================
    'tinkle-bell': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'C5': 'C5.mp3', 'C6': 'C6.mp3', 'C7': 'C7.mp3'
        }
    },

    'agogo': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'C4': 'C4.mp3', 'C5': 'C5.mp3'
        }
    },

    'steel-drums': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'A2': 'A2.mp3', 'A3': 'A3.mp3', 'A4': 'A4.mp3',
            'C3': 'C3.mp3', 'C4': 'C4.mp3', 'C5': 'C5.mp3',
            'D#3': 'Ds3.mp3', 'D#4': 'Ds4.mp3',
            'F#3': 'Fs3.mp3', 'F#4': 'Fs4.mp3'
        }
    },

    'woodblock': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/drum-samples/acoustic-kit/',
        samples: {
            'C4': 'tom1.mp3',
            'D4': 'tom2.mp3'
        }
    },

    'taiko-drum': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/drum-samples/acoustic-kit/',
        samples: {
            'C2': 'tom1.mp3',
            'D2': 'tom2.mp3',
            'E2': 'tom3.mp3'
        }
    },

    'melodic-tom': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/drum-samples/acoustic-kit/',
        samples: {
            'C2': 'tom1.mp3',
            'D2': 'tom2.mp3',
            'E2': 'tom3.mp3',
            'F2': 'tom4.mp3'
        }
    },

    'synth-drum': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/drum-samples/acoustic-kit/',
        samples: {
            'C2': 'tom1.mp3',
            'D2': 'tom2.mp3',
            'E2': 'tom3.mp3'
        }
    },

    'reverse-cymbal': {
        type: 'sampler',
        baseUrl: 'https://tonejs.github.io/audio/casio/',
        samples: {
            'C4': 'C4.mp3'
        }
    },

    // ==================== SOUND EFFECTS (120-127) ====================
    // Звуковые эффекты используют синтез
};