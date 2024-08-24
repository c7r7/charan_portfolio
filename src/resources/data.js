import React from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { ReactComponent as UBSVG} from './UB.svg';
import { ReactComponent as VITLOGO } from './vit-logo.svg';
// import srilogo from './sri-logo.png';

export const experienceData = [
    {
        company: "Worked at Oracle As an",
        title: "Associate Consultant",
        location: "Bangalore, Karnataka, India",
        description: "• Designed and modified frontend interfaces for Citibank clients across the EMEA region using Form Builder, integrating PL/SQL logic to ensure seamless functionality \n• Tested and maintained the OBCL product for the EMEA region, diagnosing and resolving issues with frontend attributes to ensure they met quality standards and functioned correctly.\n • Utilized PL/SQL and Python to develop and implement functionality in frontend interfaces and backend logic.",
        icon: React.createElement(ShoppingCartCheckoutIcon),
        date: "Jun 2023 - August 2024",
    },
    {
        company: "Worked at AB-InBev As an",
        title: "Data Scientist Intern",
        location: "Bangalore, Karnataka, India",
        description: `• Designed, developed, debugged, tested, and deployed the project "Empties Return Forecasting in Africa Logistics Analytics" by creating an automatic ensemble machine learning model that automates the forecasted results for the next few weeks.\n
                      • Worked on a Materials Planning Project in Africa to determine problem areas, which helped narrow down focus from country, brewery, and SKU (material) according to client requirements.\n
                      • Achieved project goals by effectively utilizing Python, Machine Learning, Deep Learning, and Transformers.`,
        icon: React.createElement(PhonelinkIcon),
        date: "Jan 2023 - Jun 2023"
    },
    
    {
        company: "Feynn_Labs",
        title: "Machine Learning Intern",
        location: "Remote",
        description: "• Developed a business idea for applying Machine Learning/Data Science to assist small and medium businesses with their sales, business operations, and marketing. \n • Prepared a report on the abstract prototype and business model, outlining how these technologies could enhance operational efficiency and decision-making.\n ",
        icon: React.createElement(SportsEsportsIcon),
        date: "Jan 2022 - Apr 2022"
    }
]


export const projectData = [
    {
        title: "Recommendation using Improvised Apriori Algorithm",
        stack: "Python, Machine Learning",
        img: "https://cdn-icons-gif.flaticon.com/17093/17093549.gif",
        description: " Proposed a model using the Apriori algorithm and chi-squared test to identify seasonal transaction patterns, like festival transactions that occur annually. Utilized the chi-squared test to detect these seasonal transactions and, if none were found, recommended products based on the traditional Apriori algorithm.",
        link: "https://ieeexplore.ieee.org/document/10053710"
    },
    {
        title: " Motion Detection with Face recognition",
        stack: " Python, Machine Learning, Computer Vision",
        img: "https://cdn-icons-gif.flaticon.com/14984/14984806.gif",
        description: "Utilized OpenCV and Python to detect faces and track movements, tailored for organizations with a fixed headcount• Recorded individual information in a secure SQL database to monitor entry and exit times, enhancing security and operational efficiency.",
        link: "https://github.com/c7r7/Face_Recognition/tree/main"
    },
    {
        title: "Market Segmentation Analysis",
        stack: "Python, Data Analytics & Deep Learning",
        description: "As per the Al Product/Service Ideation task, I come up with a business idea where Machine Learning/Data Science will be applied in small or medium businesses and help them with their sales, business operations, marketing etc. and prepare a report on the abstract prototype/ business model.",
        img: "https://cdn-icons-gif.flaticon.com/17556/17556514.gif",
        link: "https://github.com/c7r7/Feynn-Labs-intership-Team-Charan"
    }
    
]

export const skillsData = [
    {
        title: "Python",
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
        bgColor: "#F4433642"
    },
    {
        title: "ML",
        icon: "https://cdn-icons-gif.flaticon.com/17465/17465884.gif",
        bgColor: "#00000130"
    },
    {
        title: "DL",
        icon: "https://cdn-icons-png.flaticon.com/128/10817/10817404.png",
        bgColor: "#8BB7F02E"
    },
    {
        title: "NLP",
        icon: "https://cdn-icons-png.flaticon.com/128/9831/9831298.png",
        bgColor: "#21A3661A"
    },
    
    {
        title: "C Programming",
        icon: "https://cdn-icons-png.flaticon.com/128/9969/9969473.png",
        bgColor: "#FFC1071F"
    },
    {
        title: "AI",
        icon: "https://cdn-icons-gif.flaticon.com/11184/11184160.gif",
        bgColor: "#686F7424"
    },
    {
        title: "HTML",
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNFNjUxMDAiIGQ9Ik00MSw1SDdsMywzNGwxNCw0bDE0LTRMNDEsNUw0MSw1eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRjZEMDAiIGQ9Ik0yNCA4TDI0IDM5LjkgMzUuMiAzNi43IDM3LjcgOHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjQsMjV2LTRoOC42bC0wLjcsMTEuNUwyNCwzNS4xdi00LjJsNC4xLTEuNGwwLjMtNC41SDI0eiBNMzIuOSwxN2wwLjMtNEgyNHY0SDMyLjl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTI0LDMwLjl2NC4ybC03LjktMi42TDE1LjcsMjdoNGwwLjIsMi41TDI0LDMwLjl6IE0xOS4xLDE3SDI0di00aC05LjFsMC43LDEySDI0di00aC00LjZMMTkuMSwxN3oiPjwvcGF0aD4KPC9zdmc+",
        bgColor: "#FF6D0030"
    },
    {
        title: "CSS",
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMjc3QkQiIGQ9Ik00MSw1SDdsMywzNGwxNCw0bDE0LTRMNDEsNUw0MSw1eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMzlCRTUiIGQ9Ik0yNCA4TDI0IDM5LjkgMzUuMiAzNi43IDM3LjcgOHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMzMuMSAxM0wyNCAxMyAyNCAxNyAyOC45IDE3IDI4LjYgMjEgMjQgMjEgMjQgMjUgMjguNCAyNSAyOC4xIDI5LjUgMjQgMzAuOSAyNCAzNS4xIDMxLjkgMzIuNSAzMi42IDIxIDMyLjYgMjF6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTI0LDEzdjRoLTguOWwtMC4zLTRIMjR6IE0xOS40LDIxbDAuMiw0SDI0di00SDE5LjR6IE0xOS44LDI3aC00bDAuMyw1LjVsNy45LDIuNnYtNC4ybC00LjEtMS40TDE5LjgsMjd6Ij48L3BhdGg+Cjwvc3ZnPg==",
        bgColor: "#039BE542"
    },
    {
        title: "MySQL",
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxjaXJjbGUgY3g9IjI0IiBjeT0iMjQiIHI9IjIwIiBmaWxsPSIjMjE2Mjg3Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIyNCIgY3k9IjI0IiByPSIxOCIgZmlsbD0iI2U4NzkxMiI+PC9jaXJjbGU+PHBhdGggZmlsbD0iIzIxNjI4NyIgZD0iTTI5LjY5LDMxLjk1YzAsNC4zNS0zLjA5LDcuOTgtNy4xOSw4LjgybC0wLjU1LDAuMUMxMy41MywzOS44Nyw3LDMyLjcsNywyNGMwLTkuMzksNy42MS0xNywxNy0xNyBjMC4xNywwLDAuMzUsMCwwLjUyLDAuMDFjLTMuNSwxLjIzLTYuMDIsNC41Ni02LjAyLDguNDljMCwxLjQ5LDAuMzYsMi45LDEuMDEsNC4xNGMwLjg2LDEuNjYsMi4zLDIuOTQsMy45NywzLjc4bDEuMjIsMC42MSBjMS42NywwLjg0LDMuMTIsMi4xMiwzLjk4LDMuNzhDMjkuMzIsMjkuMDUsMjkuNjksMzAuNDYsMjkuNjksMzEuOTV6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0LDZDMTQuMDU5LDYsNiwxNC4wNTksNiwyNGMwLDguNjcxLDYuMTMyLDE1LjkwNiwxNC4yOTUsMTcuNjE0bDAuMDEyLDAuMDYzbDAuMTU5LTAuMDI5IEMyMS42MDksNDEuODc2LDIyLjc5LDQyLDI0LDQyYzkuOTQxLDAsMTgtOC4wNTksMTgtMThDNDIsMTQuMDU5LDMzLjk0MSw2LDI0LDZ6IE04LDI0YzAtNy45MzUsNS44MTMtMTQuNTIxLDEzLjQtMTUuNzY5IEMxOS4zMDksOS45OTQsMTgsMTIuNjI2LDE4LDE1LjVjMCwxLjUxOSwwLjM2NywzLjAyOSwxLjA2Miw0LjM2OGMwLjg2NSwxLjY2OCwyLjMxNiwzLjA1MSw0LjE5NywzLjk5NmwxLjIxOSwwLjYxMyBjMS42OTEsMC44NTIsMi45OTEsMi4wODQsMy43NTksMy41NjRjMC42MywxLjIxNCwwLjk0OSwyLjUyOCwwLjk0OSwzLjkwN2MwLDMuNjQ1LTIuMzUsNi44NTctNS43MTEsOC4wMjQgQzE0Ljg5NywzOS42OTMsOCwzMi42NDUsOCwyNHogTTI1LjkwNSwzOS44NzZjMi41OTktMS43MjEsNC4yODEtNC42NjgsNC4yODEtNy45MjdjMC0xLjUyLTAuMzY3LTMuMDI5LTEuMDYyLTQuMzY4IGMtMC44NjUtMS42NjgtMi4zMTYtMy4wNTEtNC4xOTctMy45OTZsLTEuMjE5LTAuNjEzYy0xLjY5Mi0wLjg1Mi0yLjk5MS0yLjA4My0zLjc1OS0zLjU2NEMxOS4zMTksMTguMTkzLDE5LDE2Ljg3OSwxOSwxNS41IGMwLTMuMTczLDEuNzgxLTYuMDE3LDQuNDY0LTcuNDczQzIzLjY0Myw4LjAyMSwyMy44MTksOCwyNCw4YzguODIyLDAsMTYsNy4xNzgsMTYsMTZDNDAsMzIuMTc3LDMzLjgzMSwzOC45MywyNS45MDUsMzkuODc2eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zOC40NTgsMjcuNTI4Yy0wLjc3Ni0wLjkyNy0yLjAxOC0xLjgyOS0yLjgwOS0zLjEzNWMtMC4xMTEtMC4xODQtMC4wNTMtMC40MDcsMC4xMzUtMC41MDcgQzM2Ljc5OSwyMy4zNDIsMzYuOTc4LDIzLjQ0MSwzOCwyM2MtMS0xLTIuMDM3LTEuMzYtMy42ODEtMS43NzRjLTAuMzIyLTAuMDY3LTAuNTA3LTAuMzM3LTAuNTYxLTAuNjM0IGMtMC4wODgtMC4zMjMtMC4yNzUtMC44Ny0wLjQ3MS0xLjMwN2MtMS40MjEtMi44NzEtMy4xOTItNi42MjUtNi43ODYtNi45MDdjLTAuMjM3LTAuMDAzLTAuNDYzLTAuMDk5LTAuNjItMC4yNTcgYy0wLjQ1My0wLjQzMi0xLjA4Ny0wLjk2Ny0xLjY3LTEuMDU1Yy0wLjExNSwwLjAxMS0wLjA1Ny0wLjAyOC0wLjE0NiwwLjA1NGMtMC4yMzMsMC4yNzMtMC4xODYsMC4yODMtMC4wMjYsMC42MyBjMC4yMTYsMC4zNjksMC42MjgsMC43OTEsMS4wMzMsMS4yMDhjMC40MTEsMC41MzEsMC4xMjYsMS4zMDgsMC4zOTYsMS45MDRjMC4xMTEsMC40MjMsMC4zNDQsMC45MjMsMC42MDMsMS4yMjkgYzAuMTI1LDAuMTYxLDAuMTYzLDAuMzY1LDAuMTI0LDAuNTVjLTAuMjg4LDEuMzc3LTAuNDkxLDIuODYyLTAuMjEyLDQuMjQxYzAuMDA2LDAuMTQ3LDAuMTUsMC4yMDIsMC4yNTYsMC4xNDkgYzAuMDMzLTAuMDI2LDAuMDMyLTAuMDA4LDAuMTYtMC4yMzNDMjYuNTU2LDIwLjQ0OCwyNy42NzUsMTguMzA3LDI4LDE5YzAuNDczLDEuNTM4LDEuMTMsNC41MywyLjUyMiw1LjQ1NSBjMC4wNTksMC4wMjUsMC4wMTMsMC4xMjItMC4wNDUsMC4wODljLTEuNDU0LTAuNzUxLTIuNjMxLTIuNjgyLTIuOTc4LTMuOTg0Yy0wLjI3LDAuMDIzLTAuNTEyLDAuMjQyLTAuNjQ4LDAuNDkzIGMtMC4yMDUsMC43MTktMS4yNiwwLjc1Ni0xLjQ0OS0wLjAxM2MtMC4wNzYtMC4yOTgtMC4xMzgtMC42LTAuMTY3LTAuOTA1Yy0wLjExMS0xLjExLTAuMDQxLTIuNzUzLDAuMjExLTMuNTgyIGMtMC43MDQtMC43Ni0xLjA5OC0yLjIyNy0xLjAwNS0yLjk5NWMtMC40MTMtMC40MTgtMC44NDctMC44MjktMS4xNy0xLjM0NGMtMC42MDgtMC43NzQtMC4wNzYtMi4xMzIsMC45NjctMi4wODMgYzAuOTI0LDAuMDc3LDEuNjcyLDAuNzA3LDIuMzMsMS4zMDFjMC43MjktMC4wNjUsMi4xNzMsMC40NDQsMi45ODIsMC45OTFjMS44MzQsMS4xOTEsMi43OTksMy4yMzYsMy44NDcsNS4wNzggYzAuNDA5LDAuODM2LDEuMTQyLDIuMjUsMS4xMjMsMi45MjRjMS44NjYsMC41NzgsMy45NzUsMS4yNzcsNS4wMzksMy4wNDZjMC4wMTksMC4wMzUsMC4wMDEsMC4wOC0wLjAzOCwwLjA5MSBjMCwwLTIuOSwwLjkxLTIuOSwwLjkxbDEuOTIxLDNDMzguNTc1LDI3LjUyMiwzOC40OTUsMjcuNTg0LDM4LjQ1OCwyNy41MjhMMzguNDU4LDI3LjUyOHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjcuMDQ2LDEzLjY4OGwwLjgzMywxLjE4OUMyNy44NzksMTQuODc4LDI4LjgzLDEzLjUzLDI3LjA0NiwxMy42ODh6Ij48L3BhdGg+PGc+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuNzYyLDIwLjA3MWMwLjc3NiwwLjkyNywyLjAxOCwxLjgyOSwyLjgwOSwzLjEzNWMwLjExMSwwLjE4NCwwLjA1MywwLjQwNy0wLjEzNSwwLjUwNyBjLTEuMDE1LDAuNTQzLTEuMTkzLDAuNDQ0LTIuMjE1LDAuODg2YzEsMSwyLjAzNywxLjM2LDMuNjgxLDEuNzc0YzAuMzIyLDAuMDY3LDAuNTA3LDAuMzM3LDAuNTYxLDAuNjM0IGMwLjA4OCwwLjMyMywwLjI3NSwwLjg3LDAuNDcxLDEuMzA3YzEuNDIxLDIuODcxLDMuMTkyLDYuNjI1LDYuNzg2LDYuOTA3YzAuMjM3LDAuMDAzLDAuNDYzLDAuMDk5LDAuNjIsMC4yNTcgYzAuNDUzLDAuNDMyLDEuMDg3LDAuOTY3LDEuNjcsMS4wNTVjMC4xMTUtMC4wMTEsMC4wNTcsMC4wMjgsMC4xNDYtMC4wNTRjMC4yMzMtMC4yNzMsMC4xODYtMC4yODMsMC4wMjYtMC42MyBjLTAuMjE2LTAuMzY5LTAuNjI4LTAuNzkxLTEuMDMzLTEuMjA4Yy0wLjQxMS0wLjUzMS0wLjEyNi0xLjMwOC0wLjM5Ni0xLjkwNGMtMC4xMTEtMC40MjMtMC4zNDQtMC45MjMtMC42MDMtMS4yMjkgYy0wLjEyNS0wLjE2MS0wLjE2My0wLjM2NS0wLjEyNC0wLjU1YzAuMjg4LTEuMzc3LDAuNDkxLTIuODYyLDAuMjEyLTQuMjQxYy0wLjAwNi0wLjE0Ny0wLjE1LTAuMjAyLTAuMjU2LTAuMTQ5IGMtMC4wMzMsMC4wMjYtMC4wMzIsMC4wMDgtMC4xNiwwLjIzM2MtMC4xNTgsMC4zNDgtMS4yNzcsMi40OS0xLjYwMiwxLjc5NmMtMC40NzMtMS41MzgtMS4xMy00LjUzLTIuNTIyLTUuNDU1IGMtMC4wNTktMC4wMjUtMC4wMTMtMC4xMjIsMC4wNDUtMC4wODljMS40NTQsMC43NTEsMi42MzEsMi42ODIsMi45NzgsMy45ODRjMC4yNy0wLjAyMywwLjUxMi0wLjI0MiwwLjY0OC0wLjQ5MyBjMC4yMDUtMC43MTksMS4yNi0wLjc1NiwxLjQ0OSwwLjAxM2MwLjA3NiwwLjI5OCwwLjEzOCwwLjYsMC4xNjcsMC45MDVjMC4xMTEsMS4xMSwwLjA0MSwyLjc1My0wLjIxMSwzLjU4MiBjMC43MDQsMC43NiwxLjA5OCwyLjIyNywxLjAwNSwyLjk5NWMwLjQxMywwLjQxOCwwLjg0NywwLjgyOSwxLjE3LDEuMzQ0YzAuNjA4LDAuNzc0LDAuMDc2LDIuMTMyLTAuOTY3LDIuMDgzIGMtMC45MjQtMC4wNzctMS42NzItMC43MDctMi4zMy0xLjMwMWMtMC43MjksMC4wNjUtMi4xNzMtMC40NDQtMi45ODItMC45OTFjLTEuODM0LTEuMTkxLTIuNzk5LTMuMjM2LTMuODQ3LTUuMDc4IGMtMC40MDktMC44MzYtMS4xNDItMi4yNS0xLjEyMy0yLjkyNGMtMS44NjYtMC41NzgtMy45NzUtMS4yNzctNS4wMzktMy4wNDZjLTAuMDE5LTAuMDM1LTAuMDAxLTAuMDgsMC4wMzgtMC4wOTEgYzAsMCwyLjktMC45MSwyLjktMC45MWwtMS45MjEtM0M5LjY0NSwyMC4wNzcsOS43MjUsMjAuMDE2LDkuNzYyLDIwLjA3MUw5Ljc2MiwyMC4wNzF6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIxLjE3NCwzMy45MTFsLTAuODMzLTEuMTg5QzIwLjM0MiwzMi43MjIsMTkuMzksMzQuMDcsMjEuMTc0LDMzLjkxMXoiPjwvcGF0aD48L2c+Cjwvc3ZnPg==",
        bgColor: "#E8791287"
    },
    
    
    {
        title: "PyTorch",
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxsaW5lYXJHcmFkaWVudCBpZD0iaHFCZGl3N2hXYmhfYmY5d2U1d0hPYV9qSDRCcGtNblJyVTVfZ3IxIiB4MT0iMTguNiIgeDI9IjI5LjExNyIgeTE9IjEwLjQwMyIgeTI9IjQyLjczNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Y0NGY1YSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjQ0MyIgc3RvcC1jb2xvcj0iI2VlM2Q0YSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2U1MjAzMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNocUJkaXc3aFdiaF9iZjl3ZTV3SE9hX2pINEJwa01uUnJVNV9ncjEpIiBkPSJNMzYuMjc3LDE1LjI1MUMzOS4yNzYsMTguMzg0LDQxLDIyLjU3MSw0MSwyN2MwLDkuMzc0LTcuNjI2LDE3LTE3LDE3UzcsMzYuMzc0LDcsMjcJYzAtOC41MTgsOC44MTItMTUuOTg0LDE1Ljg5NC0yMS45ODNjMC4zNzktMC4zMjEsMC43NC0wLjYyOSwxLjEwNi0wLjk0MXY1LjI1QzE3Ljg2NSwxNC41NTksMTEsMjAuODM3LDExLDI3CWMwLDcuMTY4LDUuODMyLDEzLDEzLDEzczEzLTUuODMyLDEzLTEzYzAtMy40MjgtMS4zNjMtNi42NTctMy43MDktOS4wNjJMMzYuMjc3LDE1LjI1MXogTTMwLDEwYy0xLjEwNSwwLTIsMC44OTUtMiwyczAuODk1LDIsMiwyCXMyLTAuODk1LDItMlMzMS4xMDUsMTAsMzAsMTB6Ij48L3BhdGg+Cjwvc3ZnPg==",
        bgColor: "#F44F5A36"
    },
    
]

export const certificationData = [
    {
        title: "Amazon Cloud Practitioner",
        year: "2022",
        link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/7B7QJTKLHMB4Q2C7"
    },
    {
        title: "Software Development Process",
        year: "2020",
        link: "https://www.coursera.org/account/accomplishments/certificate/ZZEWEDYS9KWV?utm_source=android&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
        title: "AI For Everyone",
        year: "2020",
        link: "https://www.coursera.org/account/accomplishments/certificate/UQ3QWBTWZ5YP?utm_source=android&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
        title: "Python For Everybody",
        year: "2020",
        link: "https://www.coursera.org/account/accomplishments/certificate/3HKB6GPQAFBJ?utm_source=android&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
        title: "Programming Languages",
        year: "2021",
        link: "https://drive.google.com/drive/u/0/folders/1fPO0DabZ57r9tU0uEvXLKxjXFPQGzv50"
    }
]

export const educationData = [
    {
        degree:"Master of Science Computer Science",
        title:"University at Buffalo, New York",
        year:"August 2024 - Dec 2025",
        gpa:"3.5 / 4",
        coursework: "Intro to AI, Algorithms, Machine Learning, Deep Learning",
        icon: < UBSVG />
    },
    {
        degree:"Bachelor of Technology Computer Science & Engineering",
        title:"Vellore Institute of Technology, India",
        year:"July 2019 - July 2023",
        gpa:"8.7 / 10",
        coursework:"Machine Learning, Artificial Intelligence, Natural Language Processing, Social Deep Learning",
        icon: < VITLOGO />
    },

    
]
