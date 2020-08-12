<?php

/*
 * Esse arquivo faz parte de <Empresa/Projeto>
 *
 * (c) Nome Autor <e-mail>
 *
 * Lorem ipsum ...
 */

$header = <<<'EOF'
Esse arquivo faz parte de <Empresa/Projeto>

(c) Nome Autor <e-mail>

Lorem ipsum ...
EOF;

return PhpCsFixer\Config::create()
    ->setRiskyAllowed(true)
    ->setRules(array(
        'align_multiline_comment'                     => array('comment_type' => 'phpdocs_like'),
        'array_indentation'                           => true,
        'array_syntax'                                => array('syntax' => 'long'),
        'binary_operator_spaces'                      => array('align_double_arrow' => true, 'align_equals' => true),
        'blank_line_after_namespace'                  => true,
        'blank_line_after_opening_tag'                => true,
        'blank_line_before_statement'                 => array('statements' => array('break', 'continue', 'declare', 'if', 'return', 'throw', 'try')),
        'braces'                                      => array('allow_single_line_closure' => true, 'position_after_anonymous_constructs' => 'next', 'position_after_control_structures' => 'next', 'position_after_functions_and_oop_constructs' => 'next'),
        'cast_spaces'                                 => array('space' => 'single'),
        'class_attributes_separation'                 => true,
        'class_definition'                            => array('multi_line_extends_each_single_line' => true, 'single_item_single_line' => true, 'single_line' => true),
        'class_keyword_remove'                        => true,
        'combine_consecutive_issets'                  => true,
        'combine_consecutive_unsets'                  => true,
        'concat_space'                                => array('spacing' => 'one'),
        'compact_nullable_typehint'                   => true,
        'declare_equal_normalize'                     => array('space' => 'single'),
        'doctrine_annotation_array_assignment'        => array('operator' => '='),
        'doctrine_annotation_braces'                  => array('syntax' => 'with_braces'),
        'doctrine_annotation_indentation'             => array('indent_mixed_lines' => true),
        'elseif'                                      => true,
        'encoding'                                    => true,
        'escape_implicit_backslashes'                 => array('double_quoted' => true, 'heredoc_syntax' => true, 'single_quoted' => true),
        'explicit_indirect_variable'                  => true,
        'explicit_string_variable'                    => true,
        'full_opening_tag'                            => true,
        'fully_qualified_strict_types'                => true,
        'function_declaration'                        => array('closure_function_spacing' => 'one'),
        'function_typehint_space'                     => true,
        'general_phpdoc_annotation_remove'            => array(0 => 'access', 1 => 'package', 2 => 'subpackage'),
        'header_comment'                              => array('header' => $header),
        'heredoc_to_nowdoc'                           => true,
        'include'                                     => true,
        'increment_style'                             => array('style' => 'post'),
        'indentation_type'                            => true,
        'linebreak_after_opening_tag'                 => true,
        'line_ending'                                 => true,
        'lowercase_cast'                              => true,
        'lowercase_constants'                         => true,
        'lowercase_keywords'                          => true,
        'lowercase_static_reference'                  => true,
        'magic_constant_casing'                       => true,
        'magic_method_casing'                         => true,
        'method_argument_space'                       => array('ensure_fully_multiline' => true, 'keep_multiple_spaces_after_comma' => true, 'on_multiline' => 'ensure_fully_multiline'),
        'method_chaining_indentation'                 => true,
        'multiline_comment_opening_closing'           => true,
        'multiline_whitespace_before_semicolons'      => array('strategy' => 'new_line_for_chained_calls'),
        'native_function_casing'                      => true,
        'new_with_braces'                             => true,
        'no_alias_functions'                          => true,
        'no_alternative_syntax'                       => true,
        'no_binary_string'                            => true,
        'no_blank_lines_after_class_opening'          => true,
        'no_blank_lines_after_phpdoc'                 => true,
        'no_break_comment'                            => true,
        'no_closing_tag'                              => true,
        'no_empty_comment'                            => true,
        'no_empty_phpdoc'                             => true,
        'no_empty_statement'                          => true,
        'no_extra_blank_lines'                        => true,
        'no_leading_import_slash'                     => true,
        'no_leading_namespace_whitespace'             => true,
        'no_mixed_echo_print'                         => array('use' => 'echo'),
        'no_multiline_whitespace_around_double_arrow' => true,
        'no_null_property_initialization'             => true,
        'no_short_bool_cast'                          => true,
        'no_short_echo_tag'                           => true,
        'no_singleline_whitespace_before_semicolons'  => true,
        'no_spaces_after_function_name'               => true,
        'no_spaces_around_offset'                     => array(0 => 'inside'),
        'no_spaces_inside_parenthesis'                => true,
        'no_trailing_comma_in_list_call'              => true,
        'no_trailing_comma_in_singleline_array'       => true,
        'no_trailing_whitespace'                      => true,
        'no_trailing_whitespace_in_comment'           => true,
        'no_unneeded_curly_braces'                    => true,
        'no_unneeded_control_parentheses'             => true,
        'no_unneeded_final_method'                    => true,
        'no_unset_cast'                               => true,
        'no_unused_imports'                           => true,
        'no_useless_else'                             => true,
        'no_useless_return'                           => true,
        'no_whitespace_before_comma_in_array'         => true,
        'no_whitespace_in_blank_line'                 => true,
        'normalize_index_brace'                       => true,
        'not_operator_with_space'                     => true,
        'not_operator_with_successor_space'           => true,
        'object_operator_without_whitespace'          => false,
        'ordered_imports'                             => array('sortAlgorithm' => 'alpha'),
        'phpdoc_align'                                => true,
        'phpdoc_indent'                               => true,
        'phpdoc_inline_tag'                           => true,
        'phpdoc_no_alias_tag'                         => array('type' => 'var'),
        'phpdoc_no_empty_return'                      => true,
        'phpdoc_no_useless_inheritdoc'                => true,
        'phpdoc_order'                                => true,
        'phpdoc_scalar'                               => true,
        'phpdoc_single_line_var_spacing'              => true,
        'phpdoc_summary'                              => true,
        'phpdoc_to_comment'                           => true,
        'phpdoc_trim'                                 => true,
        'phpdoc_types_order'                          => array('sort_algorithm' => 'alpha'),
        'phpdoc_var_without_name'                     => true,
        'self_accessor'                               => true,
        'semicolon_after_instruction'                 => true,
        'short_scalar_cast'                           => true,
        'simplified_null_return'                      => true,
        'single_blank_line_at_eof'                    => true,
        'single_blank_line_before_namespace'          => true,
        'single_class_element_per_statement'          => true,
        'single_import_per_statement'                 => true,
        'single_line_after_imports'                   => true,
        'single_line_comment_style'                   => true,
        'single_quote'                                => array('strings_containing_single_quote_chars' => true),
        'space_after_semicolon'                       => array('remove_in_empty_for_expressions' => true),
        'standardize_increment'                       => true,
        'standardize_not_equals'                      => true,
        'switch_case_semicolon_to_colon'              => true,
        'switch_case_space'                           => true,
        'ternary_operator_spaces'                     => true,
        'ternary_to_null_coalescing'                  => true,
        'trailing_comma_in_multiline_array'           => true,
        'trim_array_spaces'                           => true,
        'unary_operator_spaces'                       => true,
        'visibility_required'                         => array(0 => 'method', 1 => 'property'),
        'whitespace_after_comma_in_array'             => true,
        'yoda_style'                                  => array('always_move_variable' => true),
    ))
    ->setFinder(
        PhpCsFixer\Finder::create()
            ->exclude(array('vendor', 'node_modules', 'bootstrap', 'storage/framework'))
            ->notName('*.md')
            ->notName('*.xml')
            ->notName('*.yml')
            ->notName('*.lock')
    )
;
