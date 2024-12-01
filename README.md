# Calculator
A fully functional calculator built with vanilla JavaScript, featuring basic arithmetic operations and extra features like decimal support and keyboard input.

#Live-Action

[Live Preview](http://127.0.0.1:5500/index.html)

## Project Requirements

### Basic Functions
- Addition
- Subtraction
- Multiplication
- Division
- Clear function
- Display screen
- Decimal point support
- Backspace functionality
- Keyboard support

### Core Functionality
The calculator performs operations on two numbers at a time:
1. User inputs first number
2. Selects operator
3. Inputs second number
4. Presses equals or another operator to see result

### Operation Example
12 + 7 - → First calculates (12 + 7 = 19), then uses 19 as first number for next operation
### Error Handling
- Division by zero shows error message
- Prevents multiple decimal points
- Handles premature equals button presses
- Clear button completely resets calculator state

## Keyboard Shortcuts

| Key | Function |
|-----|----------|
| `0-9` | Number input |
| `.` | Decimal point |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `Enter/=` | Calculate result |
| `Backspace` | Delete last digit |
| `Escape` | Clear all |

## Implementation Details

### Basic Math Functions
javascript
add(a, b) → a + b
subtract(a, b) → a - b
multiply(a, b) → a b
divide(a, b) → b === 0 ? error : a / b
### Display Handling
- Updates in real-time with user input
- Rounds long decimal results
- Shows error messages when needed
- Clears on new number after operation

### Data Storage
- Stores first number
- Stores operator
- Stores second number
- Maintains operation state

## Extra Credit Features Implemented

1. **Decimal Support**
   - Allows floating-point number input
   - Prevents multiple decimal points
   - Works with all operations

2. **Backspace Button**
   - Removes last entered digit
   - Works with both numbers and decimals

3. **Keyboard Support**
   - Full number pad functionality
   - Operator keys mapped
   - Enter key for equals
   - Escape key for clear

## Known Limitations

- Evaluates only two numbers at a time
- Display has maximum width
- Rounds very long decimals
- No scientific notation support

## Development Process

1. Create basic math functions
2. Build HTML calculator layout
3. Style with CSS
4. Add digit button functionality
5. Implement operator logic
6. Add clear and equals functionality
7. Handle edge cases and errors
8. Add extra credit features
9. Test and debug

## Testing Instructions

1. Test basic operations
2. Try dividing by zero
3. Test decimal input
4. Test keyboard support
5. Verify chaining operations
6. Check error messages
7. Test clear functionality
8. Verify backspace works
9. Test display limitations

## Future Improvements

- Add memory functions
- Include scientific notation
- Add percentage calculations
- Implement history log
- Add parentheses support

## Development Setup

1. Clone repository
2. Open index.html in browser
3. Open console for testing
4. Test all features
5. Check responsive design

## Contributing

Feel free to fork and submit pull requests for:
- Bug fixes
- New features
- Documentation improvements
- UI enhancements

## License

MIT License - free to use and modify
