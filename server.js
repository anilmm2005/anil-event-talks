const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Synthetic talk data
const talks = [
  {
    title: 'The Future of AI in Everyday Life',
    speakers: ['Dr. Anya Sharma'],
    category: ['AI', 'Future Tech'],
    duration: 60,
    description: 'An insightful look into how artificial intelligence will shape our daily routines and industries in the coming decade.'
  },
  {
    title: 'Demystifying Quantum Computing',
    speakers: ['Prof. Ben Carter', 'Dr. Chloe Davis'],
    category: ['Quantum Computing', 'Physics', 'Advanced Tech'],
    duration: 60,
    description: 'A beginner-friendly introduction to the principles of quantum computing and its potential applications.'
  },
  {
    title: 'Cybersecurity Best Practices for Developers',
    speakers: ['Ms. Emily White'],
    category: ['Cybersecurity', 'Development', 'Security'],
    duration: 60,
    description: 'Essential security practices and common pitfalls for software developers to build more robust applications.'
  },
  {
    title: 'Blockchain Beyond Cryptocurrencies',
    speakers: ['Mr. David Green'],
    category: ['Blockchain', 'Distributed Systems'],
    duration: 60,
    description: 'Exploring the diverse applications of blockchain technology beyond its origins in digital currencies.'
  },
  {
    title: 'Sustainable Software Engineering',
    speakers: ['Dr. Fiona King', 'Mr. George Hall'],
    category: ['Sustainability', 'Software Engineering', 'Green Tech'],
    duration: 60,
    description: 'Strategies and practices for developing software that minimizes environmental impact and promotes energy efficiency.'
  },
  {
    title: 'The Psychology of User Experience (UX) Design',
    speakers: ['Ms. Hannah Lee'],
    category: ['UX Design', 'Psychology', 'Human-Computer Interaction'],
    duration: 60,
    description: 'Understanding the cognitive principles behind effective UX design to create more intuitive and engaging user interfaces.'
  }
];

// API endpoint for talks
app.get('/api/talks', (req, res) => {
  res.json(talks);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
