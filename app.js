// app.js

new Vue({
    el: '#app',
    data: {
        projects: [
            {
                id: 1,
                name: 'Auto Shop App',
                description: 'A shop management app that allows auto shop owners to update customers on their vehicles\' status, manage parts and costs, and handle appointments. Built using Flask and React.'
            },
            {
                id: 2,
                name: 'Instagram Clone',
                description: 'A social media platform clone built using SQLite, Flask, and React. It supports user profiles, photo uploads, and real-time updates.'
            },
            {
                id: 3,
                name: 'Primary-Backup Distributed System',
                description: 'A primary-backup distributed system written in Go that simulates the operations of a distributed system with a view service.'
            }
        ]
    }
});
