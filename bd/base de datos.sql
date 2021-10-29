-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Alejandra_DB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Alejandra_DB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Alejandra_DB` DEFAULT CHARACTER SET utf8 ;
USE `Alejandra_DB` ;

-- -----------------------------------------------------
-- Table `Alejandra_DB`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Alejandra_DB`.`categoria` (
  `idcategoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Alejandra_DB`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Alejandra_DB`.`producto` (
  `idproducto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `detalle` VARCHAR(45) NOT NULL,
  `codigo_interno` VARCHAR(45) NOT NULL,
  `costo` INT NOT NULL,
  `ganancia` INT NOT NULL,
  `precio` INT NOT NULL,
  `sotck_actual` INT NOT NULL,
  `stock_min` INT NOT NULL,
  `stock_max` INT NOT NULL,
  `categoria_idcategoria` INT NOT NULL,
  PRIMARY KEY (`idproducto`),
  INDEX `fk_producto_categoria1_idx` (`categoria_idcategoria` ASC) VISIBLE,
  CONSTRAINT `fk_producto_categoria1`
    FOREIGN KEY (`categoria_idcategoria`)
    REFERENCES `Alejandra_DB`.`categoria` (`idcategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Alejandra_DB`.`codigo_barras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Alejandra_DB`.`codigo_barras` (
  `idcodigo_barras` INT NOT NULL AUTO_INCREMENT,
  `codigo` INT NOT NULL,
  `producto_idproducto` INT NOT NULL,
  PRIMARY KEY (`idcodigo_barras`),
  INDEX `fk_codigo_barras_producto_idx` (`producto_idproducto` ASC) VISIBLE,
  CONSTRAINT `fk_codigo_barras_producto`
    FOREIGN KEY (`producto_idproducto`)
    REFERENCES `Alejandra_DB`.`producto` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Alejandra_DB`.`proveedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Alejandra_DB`.`proveedor` (
  `idproveedor` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `vendedor` VARCHAR(45) NOT NULL,
  `info_pago` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idproveedor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Alejandra_DB`.`servicio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Alejandra_DB`.`servicio` (
  `idservicio` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `detalle` VARCHAR(45) NOT NULL,
  `precio` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idservicio`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Alejandra_DB`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Alejandra_DB`.`rol` (
  `idrol` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idrol`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Alejandra_DB`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Alejandra_DB`.`usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `rol` VARCHAR(45) NOT NULL,
  `rol_idrol` INT NOT NULL,
  PRIMARY KEY (`idusuario`),
  INDEX `fk_usuario_rol1_idx` (`rol_idrol` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_rol1`
    FOREIGN KEY (`rol_idrol`)
    REFERENCES `Alejandra_DB`.`rol` (`idrol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Alejandra_DB`.`factura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Alejandra_DB`.`factura` (
  `idfactura` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `total_venta` INT NOT NULL,
  `usuario_idusuario` INT NOT NULL,
  PRIMARY KEY (`idfactura`),
  INDEX `fk_factura_usuario1_idx` (`usuario_idusuario` ASC) VISIBLE,
  CONSTRAINT `fk_factura_usuario1`
    FOREIGN KEY (`usuario_idusuario`)
    REFERENCES `Alejandra_DB`.`usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Alejandra_DB`.`detalle_factura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Alejandra_DB`.`detalle_factura` (
  `iddetalle_factura` INT NOT NULL,
  `producto` VARCHAR(45) NOT NULL,
  `servicio` VARCHAR(45) NOT NULL,
  `producto_idproducto` INT NOT NULL,
  `factura_idfactura` INT NOT NULL,
  `servicio_idservicio` INT NOT NULL,
  PRIMARY KEY (`iddetalle_factura`),
  INDEX `fk_detalle_factura_producto1_idx` (`producto_idproducto` ASC) VISIBLE,
  INDEX `fk_detalle_factura_factura1_idx` (`factura_idfactura` ASC) VISIBLE,
  INDEX `fk_detalle_factura_servicio1_idx` (`servicio_idservicio` ASC) VISIBLE,
  CONSTRAINT `fk_detalle_factura_producto1`
    FOREIGN KEY (`producto_idproducto`)
    REFERENCES `Alejandra_DB`.`producto` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalle_factura_factura1`
    FOREIGN KEY (`factura_idfactura`)
    REFERENCES `Alejandra_DB`.`factura` (`idfactura`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalle_factura_servicio1`
    FOREIGN KEY (`servicio_idservicio`)
    REFERENCES `Alejandra_DB`.`servicio` (`idservicio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Alejandra_DB`.`proveedor_has_producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Alejandra_DB`.`proveedor_has_producto` (
  `proveedor_idproveedor` INT NOT NULL,
  `producto_idproducto` INT NOT NULL,
  PRIMARY KEY (`proveedor_idproveedor`, `producto_idproducto`),
  INDEX `fk_proveedor_has_producto_producto1_idx` (`producto_idproducto` ASC) VISIBLE,
  INDEX `fk_proveedor_has_producto_proveedor1_idx` (`proveedor_idproveedor` ASC) VISIBLE,
  CONSTRAINT `fk_proveedor_has_producto_proveedor1`
    FOREIGN KEY (`proveedor_idproveedor`)
    REFERENCES `Alejandra_DB`.`proveedor` (`idproveedor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_proveedor_has_producto_producto1`
    FOREIGN KEY (`producto_idproducto`)
    REFERENCES `Alejandra_DB`.`producto` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
