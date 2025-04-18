import React from 'react';
import {render, screen} from '@testing-library/react-native';
import WeatherScreen from "@br/weather/core/WeatherScreen/WeatherScreen";

test('Weather Forecast! text is visible', () => {
    const expected = 'Weather Forecast!';
    render(<WeatherScreen />);

    const heading = screen.getByRole('summary');
    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent(expected);
});
