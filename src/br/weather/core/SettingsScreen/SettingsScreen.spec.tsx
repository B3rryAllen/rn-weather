import React from 'react';
import {render, screen} from '@testing-library/react-native';
import SettingsScreen from '@br/weather/core/SettingsScreen/SettingsScreen.tsx';

test('Settings! text is visible', () => {
    const expected = 'Settings!';
    render(<SettingsScreen />);

    const heading = screen.getByRole('summary');
    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent(expected);
});
