<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Áreas do conhecimento
        Category::create(['name' => 'Linguagem e suas Tecnologias', 'type' => 'area']);
        Category::create(['name' => 'Matemática e suas Tecnologias', 'type' => 'area']);
        Category::create(['name' => 'Ciências da Natureza e suas Tecnologias', 'type' => 'area']);
        Category::create(['name' => 'Ciências Humanas e Sociais Aplicadas', 'type' => 'area']);

        // Eixos Estruturantes
        Category::create(['name' => 'Investigação científica', 'type' => 'axis']);
        Category::create(['name' => 'Processos criativos', 'type' => 'axis']);
        Category::create(['name' => 'Mediação e intervenção sociocultural', 'type' => 'axis']);
        Category::create(['name' => 'Empreendedorismo', 'type' => 'axis']);

        // Objetivos da ONU
        Category::create(['name' => 'Erradicação da Pobreza', 'type' => 'objective']);
        Category::create(['name' => 'Erradicação da Fome', 'type' => 'objective']);
        Category::create(['name' => 'Saúde de Qualidade', 'type' => 'objective']);
        Category::create(['name' => 'Educação de Qualidade', 'type' => 'objective']);
        Category::create(['name' => 'Igualidade de Gênero', 'type' => 'objective']);
        Category::create(['name' => 'Água Limpa e Saneamento', 'type' => 'objective']);
        Category::create(['name' => 'Energias Renováveis', 'type' => 'objective']);
        Category::create(['name' => 'Empregos Dignos e Crescimento Econômico', 'type' => 'objective']);
        Category::create(['name' => 'Inovação e Infraestrutura', 'type' => 'objective']);
        Category::create(['name' => 'Redução das Desigualdades', 'type' => 'objective']);
        Category::create(['name' => 'Cidades e Comunidades Sustentáveis', 'type' => 'objective']);
        Category::create(['name' => 'Consumo Responsável', 'type' => 'objective']);
        Category::create(['name' => 'Combate às Mudanças Climáticas ', 'type' => 'objective']);
        Category::create(['name' => 'Vidade Debaixo da Água', 'type' => 'objective']);
        Category::create(['name' => 'Vida Sobre a Terra', 'type' => 'objective']);
        Category::create(['name' => 'Paz e Justiça', 'type' => 'objective']);
        Category::create(['name' => 'Parcerias Pelas Metas', 'type' => 'objective']);
    }
}
