FROM python:3.9-slim
WORKDIR /docker
COPY . /docker
RUN pip install --no-cache-dir flask flask-cors
EXPOSE 5000
ENV FLASK_APP=app.py
CMD ["python", "app.py"]

