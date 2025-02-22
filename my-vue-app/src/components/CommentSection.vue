<script setup>
import { ref, onMounted } from 'vue';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kbhnxlrhbxamkgwyqpjn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiaG54bHJoYnhhbWtnd3lxcGpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0Njc3NzEsImV4cCI6MjA1NDA0Mzc3MX0.lCXlrIXQaw3BvkzR9SBLGuxXnDAIscdkzcUpnn0KR-8';
const supabase = createClient(supabaseUrl, supabaseKey);

const comments = ref([]);
const name = ref('');
const message = ref('');
const confirmationMessage = ref('');

const fetchComments = async () => {
  let { data, error } = await supabase
    .from('comments')
    .select('*')
    .order('created_at', { ascending: false });

  if (!error) {
    comments.value = data;
  }
};

const submitComment = async () => {
  if (!name.value || !message.value) return;

  let { data, error } = await supabase.from('comments').insert([
    {
      name: name.value,
      message: message.value,
      created_at: new Date().toISOString(),
    }
  ]);

  if (!error) {
    confirmationMessage.value = 'Comment submitted successfully!';
    
    comments.value.unshift({ name: name.value, message: message.value, created_at: new Date().toISOString() });

    name.value = '';
    message.value = '';

    setTimeout(() => (confirmationMessage.value = ''), 3000);
  }
};

onMounted(() => {
  fetchComments();

  supabase
    .channel('comments')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'comments' }, (payload) => {
      comments.value.unshift(payload.new);
    })
    .subscribe();
});
</script>


<style>
body {
    font-family: 'Poppins', sans-serif;
    background-color: #f5ebe0;
    color: #4a3f35;
    margin: 0;
    padding: 0;
  }
  
  /* Comments Section */
  .comments-section, .contact-section {
    max-width: 600px;
    background: #fff8f0;
    margin: 2rem auto;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .comment-form input, .comment-form textarea,
  .contact-form input, .contact-form textarea {
    width: 100%;
    padding: 10px;
    margin: 8px 0;
    border: 1px solid #d3a484;
    border-radius: 8px;
    font-size: 1rem;
    background: #fffdf8;
    color: #4a3f35;
  }
  
  .comment-form button, .contact-form button {
    width: 100%;
    padding: 10px;
    background: #7a503d;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .comment-form button:hover, .contact-form button:hover {
    background: #5d3a2e;
  }
  
  .comments-list {
    margin-top: 1rem;
  }
  
  .comment-box {
    background: #fdf7f0;
    padding: 10px;
    margin-bottom: 10px;
    border-left: 4px solid #d3a484;
    border-radius: 8px;
  }
  
  .comment-box p {
    margin: 0;
    font-size: 0.95rem;
  }
  
  .comment-box span {
    font-size: 0.8rem;
    color: #7a503d;
    display: block;
    margin-top: 4px;
  }
  
  .success-message, .confirmation-message {
    color: #815e55d3;
    font-weight: bold;
    text-align: center;
    margin-top: 1rem;
  }
</style>
