/**
 * @format
 */

import React from 'react';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import App from "@br/weather/App";

// jest.useFakeTimers();

test('Weather Forecast page is the first page visible', () => {
    const expected =  'Weather Forecast!';
    render(<App />);
    const weatherHead = screen.getByText(expected);
    expect(weatherHead).toBeVisible();
});

test( 'Open Setting screen selecting Settings tab', async () => {

    render(<App />);

    // Get *all* the buttons (tabs are buttons)
    const tabButtons = screen.getAllByRole('button');

    // Find the one labeled "Settings"
    const settingsTab = tabButtons.find((btn) =>
        within(btn).queryByText('Settings')
    );

    expect(settingsTab).toBeTruthy(); // make sure it's found
    fireEvent.press(settingsTab!);

    // Now check if "Settings" screen is visible
    const settingsSummary = await screen.findByRole('summary');
    expect(settingsSummary).toBeVisible();
    expect(settingsSummary).toHaveTextContent('Settings!')
})
