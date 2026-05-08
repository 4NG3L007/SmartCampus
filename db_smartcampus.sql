-- 1. Usuarios de la u 
CREATE TABLE usuarios_campus (
    id SERIAL PRIMARY KEY,
    nombre_completo VARCHAR(150) NOT NULL,
    registro_universitario VARCHAR(20) UNIQUE,
    correo_institucional VARCHAR(100) UNIQUE,
    tipo_usuario VARCHAR(50), 
    estado_acceso BOOLEAN DEFAULT true 
);

-- 2. areas de la u 
CREATE TABLE areas (
    id SERIAL PRIMARY KEY,
    nombre_area VARCHAR(100) NOT NULL,
    capacidad_maxima INT,
    nivel_seguridad INT DEFAULT 1 
-- 3. Control de Acceso 
CREATE TABLE registros_acceso (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios_campus(id),
    area_id INT REFERENCES areas(id),
    fecha_entrada TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_salida TIMESTAMP,
    metodo_acceso VARCHAR(50)
);

-- 4. Dispositivos de monitoreo 
CREATE TABLE dispositivos_control (
    id SERIAL PRIMARY KEY,
    area_id INT REFERENCES areas(id),
    codigo_dispositivo VARCHAR(50) UNIQUE,
    estado_dispositivo VARCHAR(20) DEFAULT 'operativo',
    ultima_sincronizacion TIMESTAMP
);

-- 5. Reportes de Seguridad - aalertas
CREATE TABLE alertas_sistema (
    id SERIAL PRIMARY KEY,
    area_id INT REFERENCES areas(id),
    descripcion_alerta TEXT,
    nivel_prioridad VARCHAR(20), 
    fecha_alerta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    resuelta BOOLEAN DEFAULT false
);