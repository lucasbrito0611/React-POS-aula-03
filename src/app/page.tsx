"use client";

import type React from "react";

import { useState } from "react";
import dados, { TarefaInterface } from "@/data";
import Cabecalho from "@/componentes/Cabecalho";
import Tarefa from "@/componentes/Tarefa";
import Tarefas from "@/componentes/Tarefas";

const Home = () => {
	const tarefas: TarefaInterface[] = dados;

	return (
		<div className="container mx-auto p-4">
			<Cabecalho />
			<Tarefas dados={tarefas} />
		</div>
	);
};

export default Home;