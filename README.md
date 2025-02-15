1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rsclone/rsclone.md

2.  ![Скриншот 2023-02-27 14 33 02](https://user-images.githubusercontent.com/95591141/221553564-d42b1073-182f-444d-bb0c-eb7c34b4c591.png)

3. Deploy: https://deluxe-shortbread-59a1ab.netlify.app/

4. Done 27.02.2023 / deadline 28.02.2023

5. Score: 620/620

1. Технический стек приложения: (20)
- [x]  Настроен ESLint +5
- [x]  Используется Local Storage для сохранения языка игры +5
- [x]  Настроен сборщик Vite +5
- [x] SPA приложение, используется routing +5


2. Backend (100) 
Ссылка на репозиторий [GitHub - HKudria/rsCloneBackend](https://github.com/HKudria/rsCloneBackend)

! Из-за того что backend стоит на [onrender.com](http://onrender.com/) , то первый запрос может длиться около минуты. Это особенность данного бесплатного деплоя.

- [x] Endpoint регистрации - /register.  Регистрация пользователя +20
- [x] Endpoint авторизации - /login. Проверка данных пользователя, при успешном совпадении отправка обратно JWT token с установкой его в cookie. +20
- [x] Endpoint данных пользователя - /userData. Получение всех сохраненных игр данного пользователя. Требуется JWT token который передается в headers. +20
- [x] Endpoint сохранения игры - /saveUserResult. Сохранение игры данного пользователя. Требуется JWT token который передается в headers. +20
- [x] Endpoint статистики игр - /getLeaders. Получение форматированного списка сохраненных игр от всех пользователей. +20


3. Основная страница(игра) 
ПАНЕЛЬ С ВЫБОРОМ РЕЖИМА (85)

- [x]  режим 'punctuation', добавляющий знаки препинания к тексту +5
- [x]  режим 'number', добавляющий цифры к тексту +5
- [x]  возможность установить таймер на указанное время +10
- [x]  возможность самостоятельно задать время для таймера +5
- [x]  режим "words" устанавливает количество выбранных слов +10
- [x]  в режиме "words" можно самостоятельно задать количество слов, но не более 100 +5
- [x]  режим "sentence" генерирует предложения, возможность выбора короткого, среднего и длинного предложения +10
- [x]  режим "change" позволяет самостоятельно задавать текст для игры +10
- [x]  режим "help", отражает клавиатуру +5
- [x]  если происходит набор текста с помощью реальной клавиатуры, то на виртуальной клавиатуре подсвечиваются буквы и цифры, которые нужно ввести +10
- [x]  можно вводить символы с помощью виртуальной клавиатуры +10


ПОЛЕ ВВОДА ТЕКСТА (55)

- [x]  При клике в область текста загорается зеленый индикатор, который означает, что игра начата и можно вводить текст +5
- [x]  Если нажать Esc, то игра начнется заново +10
- [x]  Если вводить верные буквы, они будут выделены оранжевым +5
- [x]  Если вводить неверные буквы, они будут выделены красным +5
- [x]  Неправильно написанные буквы можно удалять, нажимая Backspace +5
- [x]  При установке таймера, таймер начинает отсчет только когда пользователь начнет игру +10
- [x]  При окончании времени таймера открывается статистика +10
- [x]  При введении всех букв, также открывается статистика +5


4. СТАТИСТИКА (модальное окно, которое открывается при завершении игры) (60)

- [x]  В статистике содержится набираемый во время игры текст +5
- [x]  Есть время окончания игры в секундах (за сколько сек была пройдена игра) +10
- [x]  Рассчитан процент успеха +10
- [x]  Если игры была с таймером, то отображается время указанное в таймере, иначе off +10
- [x]  Рассчитан процент ненаписанных букв(например, если стоял таймер, а пользователь не успел ввести все буквы) +10
- [x]  Есть диаграмма, в которой отражено количество верно и неверно введенных букв +15
- [x]  Кнопка "Try again", позволяющая еще раз сыграть в игру +10


5. СТРАНИЦА С ИНФОРМАЦИЕЙ О ПРИЛОЖЕНИИ (20)

- [x]  Отражена информация о приложении +10
- [x]  Представлены разработчики приложения, тимлид +10


6. СТРАНИЦА С НАСТРОЙКАМИ (75)

- [x]  Возможность смены языка для всего приложения (русский и английский) +30
- [x]  Язык также меняется для фраз, используемых в игр +5
- [x]  Возможность выбора звука при нажатии клавиш или его отключения +20
- [x]  Возможность выбора множества шрифтов +20


7. АВТОРИЗАЦИЯ В ПРИЛОЖЕНИИ (30)

- [x]  При входе запрашивается email и пароль, проверяется валидность введенных символов +10
- [x]  Если логин или пароль не валиден, поле информирует об этом +5
- [x]  Кнопка "Sign in" позволяет авторизироваться в игре и переходит на личный аккаунт игрока +10
- [x]  При авторизации отражается информация, что игрок успешно зашел в игру +5


8. РЕГИСТРАЦИЯ (55)

- [x]  Есть форма регистрации нового пользователя +5
- [x]  Ввод First name должно содержать только A-Z и минимум 3 символа. Если неверно, но поле информирует об этом +10
- [x]  Ввод Last name должно содержать только A-Z и минимум 3 символа. Если неверно, но поле информирует об этом +10
- [x]  Ввод email, если введен неверно, то поле информирует об этом +10
- [x]  Поле Password для ввода пароля, и Rereat password для повтора введения пароля, если Repeat password не соответствует Password, то поле информирует об этом +10
- [x]  Кнопка Register регистрирует нового пользователя и переходит на новый созданный аккаунт +10


9. СТРАНИЦА С ПРОФИЛЕМ ПОЛЬЗОВАТЕЛЯ (50)

- [x]  Отражается имя игрока +5
- [x]  Есть кнопка Logout, позволяющая выйти из профиля пользователя +5
- [x]  Представлена статистика по всем сыгранным пользователем играм +10
- [x]  Отражается дата и время игры +5
- [x]  Отражается введенный текст во время игры +5
- [x]  Отражается количество правильно и неправильно введенных букв +5
- [x]  Отражается процент успеха игры +5
- [x]  Есть кнопка для просмотра более подробной статистики +5
- [x]  У открывающейся статистики есть кнопка Close Modal, позволяющее закрыть модальное окно со статистикой +5



10. СТРАНИЦА С ЛИДЕРАМИ ИГРЫ (РЕЙТИНГ) (50)

- [x]  Содержит имена игроков 5
- [x]  Содержит текста, которые были в игре для игроков 5
- [x] Отражает правильные и неправильные веденные буквы +5
- [x]  Отражает процент успеха игры +5
- [x]  Имеется рейтинг, т. е. 1, 2, 3 и тд места, которые занял тот или иной игрок +5
- [x]  Возможность сортировать по верным, неверным буквам и проценту успеха (за сортировку в данном таске баллы не добавляются)
- [x]  Есть кнопка для просмотра более подробной статистики +5
- [x]  У открывающейся статистики есть кнопка Close Modal, позволяющее закрыть модальное окно со статистикой +5
- [x]  Реализована пагинация с возможностью указать максимальное количество результатов на странице +15


1. ОТДЕЛЬНО (20)

- [x]  Если игрок не авторизирован, то открывается модальное окно с возможностью закрыть его, закрыть навсегда или  зарегистрироваться +15
- [x]  Если игрок не авторизирован, то его результаты не будут сохранены и добавлены в таблицу лидеров +5

