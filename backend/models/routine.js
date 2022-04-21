const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating schema

const routineList = new Schema({
  _id: {
    type: String,
    required: true,
  },
  sevenDays: [
    {
      time: {
        type: String,
        default: '00:00',
      },
      id: {
        type: Number,
        default: 0,
      },
      monday: {
        id: {
          type: Number,
          default: Math.random(),
        },
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: {
          type: String,
          default: '00:00',
        },
      },
      tuesday: {
        id: {
          type: Number,
          default: Math.random(),
        },
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: {
          type: String,
          default: '00:00',
        },
      },
      wendesday: {
        id: {
          type: Number,
          default: Math.random(),
        },
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: {
          type: String,
          default: '00:00',
        },
      },
      thursday: {
        id: {
          type: Number,
          default: Math.random(),
        },
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: {
          type: String,
          default: '00:00',
        },
      },
      friday: {
        id: {
          type: Number,
          default: Math.random(),
        },
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: {
          type: String,
          default: '00:00',
        },
      },
      saturday: {
        id: {
          type: Number,
          default: Math.random(),
        },
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: {
          type: String,
          default: '00:00',
        },
      },
      sunday: {
        id: {
          type: Number,
          default: Math.random(),
        },
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: {
          type: String,
          default: '00:00',
        },
      },
    },
    {
      time: {
        type: String,
        default: '01:00',
      },
      id: {
        type: Number,
        default: 1,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '01:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '01:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '01:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '01:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '01:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '01:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '01:00',
      },
    },
    {
      time: {
        type: String,
        default: '02:00',
      },
      id: {
        type: Number,
        default: 2,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '02:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '02:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '02:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '02:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '02:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '02:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '02:00',
      },
    },
    {
      time: {
        type: String,
        default: '03:00',
      },
      id: {
        type: Number,
        default: 3,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '03:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '03:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '03:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '03:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '03:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '03:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '03:00',
      },
    },
    {
      time: {
        type: String,
        default: '04:00',
      },
      id: {
        type: Number,
        default: 4,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '04:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '04:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '04:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '04:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '04:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '04:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '04:00',
      },
    },
    {
      time: {
        type: String,
        default: '05:00',
      },
      id: {
        type: Number,
        default: 5,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '05:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '05:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '05:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '05:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '05:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '05:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '05:00',
      },
    },
    {
      time: {
        type: String,
        default: '06:00',
      },
      id: {
        type: Number,
        default: 6,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '06:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '06:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '06:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '06:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '06:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '06:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '06:00',
      },
    },
    {
      time: {
        type: String,
        default: '07:00',
      },
      id: {
        type: Number,
        default: 7,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '07:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '07:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '07:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '07:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '07:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '07:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '07:00',
      },
    },
    {
      time: {
        type: String,
        default: '08:00',
      },
      id: {
        type: Number,
        default: 8,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '08:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '08:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '08:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '08:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '08:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '08:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '08:00',
      },
    },
    {
      time: {
        type: String,
        default: '09:00',
      },
      id: {
        type: Number,
        default: 9,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '09:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '09:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '09:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '09:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '09:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '09:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '09:00',
      },
    },
    {
      time: {
        type: String,
        default: '10:00',
      },
      id: {
        type: Number,
        default: 10,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '10:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '10:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '10:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '10:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '10:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '10:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '10:00',
      },
    },
    {
      time: {
        type: String,
        default: '11:00',
      },
      id: {
        type: Number,
        default: 11,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '11:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '11:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '11:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '11:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '11:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '11:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '11:00',
      },
    },
    {
      time: {
        type: String,
        default: '12:00',
      },
      id: {
        type: Number,
        default: 12,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '12:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '12:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '12:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '12:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '12:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '12:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '12:00',
      },
    },
    {
      time: {
        type: String,
        default: '13:00',
      },
      id: {
        type: Number,
        default: 13,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '13:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '13:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '13:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '13:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '13:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '13:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '13:00',
      },
    },
    {
      time: {
        type: String,
        default: '14:00',
      },
      id: {
        type: Number,
        default: 14,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '14:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '14:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '14:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '14:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '14:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '14:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '14:00',
      },
    },
    {
      time: {
        type: String,
        default: '15:00',
      },
      id: {
        type: Number,
        default: 15,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '15:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '15:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '15:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '15:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '15:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '15:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '15:00',
      },
    },
    {
      time: {
        type: String,
        default: '16:00',
      },
      id: {
        type: Number,
        default: 16,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '16:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '16:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '16:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '16:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '16:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '16:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '16:00',
      },
    },
    {
      time: {
        type: String,
        default: '17:00',
      },
      id: {
        type: Number,
        default: 17,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '17:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '17:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '17:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '17:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '17:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '17:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '17:00',
      },
    },
    {
      time: {
        type: String,
        default: '18:00',
      },
      id: {
        type: Number,
        default: 18,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '18:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '18:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '18:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '18:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '18:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '18:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '18:00',
      },
    },
    {
      time: {
        type: String,
        default: '19:00',
      },
      id: {
        type: Number,
        default: 19,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '19:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '19:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '19:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '19:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '19:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '19:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '19:00',
      },
    },
    {
      time: {
        type: String,
        default: '20:00',
      },
      id: {
        type: Number,
        default: 20,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '20:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '20:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '20:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '20:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '20:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '20:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '20:00',
      },
    },
    {
      time: {
        type: String,
        default: '21:00',
      },
      id: {
        type: Number,
        default: 21,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '21:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '21:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '21:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '21:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '21:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '21:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '21:00',
      },
    },
    {
      time: {
        type: String,
        default: '22:00',
      },
      id: {
        type: Number,
        default: 22,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '22:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '22:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '22:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '22:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '22:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '22:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '22:00',
      },
    },
    {
      time: {
        type: String,
        default: '23:00',
      },
      id: {
        type: Number,
        default: 23,
      },
      monday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Monday',
        },
        parenTime: '23:00',
      },
      tuesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Tuesday',
        },
        parenTime: '23:00',
      },
      wendesday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Wendesday',
        },
        parenTime: '23:00',
      },
      thursday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Thursday',
        },
        parenTime: '23:00',
      },
      friday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Friday',
        },
        parenTime: '23:00',
      },
      saturday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Saturday',
        },
        parenTime: '23:00',
      },
      sunday: {
        id: Math.random(),
        message: {
          type: String,
          default: '',
        },
        day: {
          type: String,
          default: 'Sunday',
        },
        parenTime: '23:00',
      },
    },
  ],
});

// creating model

const Routine = mongoose.model('Routine', routineList);

// export

module.exports = Routine;
