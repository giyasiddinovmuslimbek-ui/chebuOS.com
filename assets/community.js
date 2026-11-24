(() => {
 const form=document.getElementById('feedback-form');form.addEventListener('submit',e=>{
 e.preventDefault();const kind=document.getElementById('feedback-kind').value,title=document.getElementById('feedback-title').value.trim(),description=document.getElementById('feedback-text').value.trim();if(!title||!description)return;
 const body=`chebuOS — ${kind}\nТема: ${title}\n\n${description}\n\nФайл создан локально на сайте chebuOS.\n`;
 const url=URL.createObjectURL(new Blob([body],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='chebuOS-feedback.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
 document.getElementById('feedback-status').textContent='Файл сохранён. Чтобы поделиться идеей, отправь его в чат проекта.';
 });
})();