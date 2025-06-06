import {UnitType} from '@br/weather/core/config';

export interface WeatherData {
    date: number;
    humidity: number;
    temperature: {
        current: number;
        min: number;
        max: number;
        unit: UnitType;
    };
    status: string;
    description: string;
    icon: string;
}
