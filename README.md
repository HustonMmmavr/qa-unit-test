<h1>QA-UnitTest-Calcuator</h1>
<h2>Условие</h2>
    <ul>
        <li> Написать калькулятор используя JS </li>
        <li> Написать к нему Юнит тесты </li>   
    </ul>

<h2>Инструменты</h2>
<ul>
    <li>Mocha + Istanbul(nyc)</li>
</ul>

<h2>Результаты тстирования</h2>
<pre> 
        Operation add:
        ✓ Ok Add two positive integers 2 + 3 = 5
        ✓ Ok Add  positive and negative integers 2 + (-3) = -1
        ✓ Ok Add integer and float 2 + 3.1654 = 5.1654
        ✓ Ok Add positive integer and negative float 2 + (-3.1654) = -1.1654
        ✓ Ok add zero and positive float: 0 + 3.1654 = 3.1654

        Operation sub:
            ✓ Ok Sub two positive integers 2000 - 1999 = 1
            ✓ Ok Sub positive and negative integers 8 - (-3) = 11
            ✓ Ok Sub integer and float 1 - 0.1654 = 0.8346
            ✓ Ok Sub negative intger and negagtive float -1 - (-0.1654) = -0.8346
            ✓ Ok Sub zero and positive float: 0 - 3.1654 = 3.1654

        Operation mul:
            ✓ Ok Mul two positive integers 11 * 111 = 1121
            ✓ Ok Mul integer and zero (integer) 11 * 0 = 0
            ✓ Ok Mul integer and zero (float) 11 * 0.0 = 0
            ✓ Ok Mul two positive and negative integers 12 * (-122) = -1464
            ✓ Ok Mul positive integer and float 10 * 2.1 = 21
            ✓ Ok Mul two negative integers (-8) * (-3) = 24
            ✓ Ok Mul positive integer and negative float 1 - 0.1654 = 0.8346

        Operation div:
            ✓ Ok Div two positive integers 3125 / 5 = 625
            ✓ Ok Div positive and negative integers 8 / -1 = -8
            ✓ Ok Div two negative integers -8 / -2 = -4
            ✓ Ok div zero by integer and float 0 / 2 = 0
            ✓ Ok div positive integer and float 1 / 0.5 = 2
            ✓ Ok div positive integer and negative float 1 / -0.5 = -2
            ✓ Ok div two positive floats  1.5 / 0.5 = 3
            ✓ Ok div two negative floats -1.5 / -0.5 = 3
            ✓ Err divide by zero (0): 8 / 0
            ✓ Err divide by zero (0.0) float: 8 / 0

        Operand validation:
            ✓ Ok validate positive integer
            ✓ Ok validate negative integer
            ✓ Ok validate positive float
            ✓ Ok validate negative float
            ✓ Ok validate 0 from string
            ✓ Ok validate 0 from string
            ✓ Err Validate string 'sdfdds':
            ✓ Err Validate string '10e':
            ✓ Err validate NaN:

        Calculator method compute:
            ✓ Ok add two positive integers 2000 + 1999 = 3999
            ✓ Ok sub two positive integers 2000 - 1999 = 1
            ✓ Ok mul two positive integers 2000 * 1999 = 3998000
            ✓ Ok div two positive integers 2000 / 2 = 1000
            ✓ Err: Division by zero 2000 / 0:
            ✓ Err: Sended incorrect first operand = 'sdfd':
            ✓ Err: Sended incorrect second operand = Nan:
            ✓ Err: Sended incorrect operator = 'a'


        44 passing (27ms)

        ---------------|----------|----------|----------|----------|-------------------|
        File           |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
        ---------------|----------|----------|----------|----------|-------------------|
        All files      |      100 |      100 |      100 |      100 |                   |
        calculator.js |      100 |      100 |      100 |      100 |                   |
        ---------------|----------|----------|----------|----------|-------------------|
</pre>


<h2>Запуск программы</h2>
<ul>
    <li>Склонировать репозиторий</li>
    <li>Установить зависимости npm install</li>
    <li>npm start - Запустить программу</li>
    <li>npm test - Запустить тесты без покрытия</li>
    <li>npm run test-with-cov - Запустить тесты с покрытием</li>
</ul>


