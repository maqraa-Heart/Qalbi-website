self.addEventListener('push', event => {
    const data = event.data.json();
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: '/favicon/favicon-32x32.png'
    });
});

self.addEventListener('message', event => {
    if (event.data.type === 'SCHEDULE_NOTIFICATION') {
        const { session, delay } = event.data;
        setTimeout(() => {
            self.registration.showNotification(`تذكير: ${session.topic}`, {
                body: `جلسة ${session.topic} تبدأ الآن!`,
                icon: '/favicon/favicon-32x32.png'
            });
        }, delay);
    }
});